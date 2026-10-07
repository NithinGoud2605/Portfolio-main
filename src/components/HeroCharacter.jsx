import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

/**
 * Cursor-tracking hero character.
 *
 * Built from 8 Seedance clips (centre -> each direction). For every direction we
 * keep `steps` frames, so the head can turn a little or a lot depending on how far
 * the cursor is from the face.
 *
 * Renderer rules (from the sl_tech_journal guide):
 *  - cursor direction from atan2(dy, dx) relative to the face
 *  - smooth, frame-rate independent easing (no lag, no jitter)
 *  - EXACTLY ONE frame drawn at 100% opacity (no blending -> no ghosting)
 *  - centre deadzone -> direct eye contact
 * The body never moves: the base image is drawn once and only the head patch changes.
 */

// Feel. Lower RESPONSE_MS = snappier head. ~110ms reads as "quick but natural".
const RESPONSE_MS = 110;
const DEADZONE = 0.1;        // fraction of the reach radius where he looks straight at you
const REACH = 0.38;          // reach radius as a fraction of min(viewport w, h)
const IDLE_MS = 6000;        // after this long without movement he looks back at the visitor
const DIRS = ['right', 'down-right', 'down', 'down-left', 'left', 'up-left', 'up', 'up-right'];

const loadImg = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });

const HeroCharacter = forwardRef(({ className = '', src = '/assets/hero' }, ref) => {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const [manifest, setManifest] = useState(null);
  const [ready, setReady] = useState(false);
  const [density] = useState(() =>
    typeof window !== 'undefined' && (window.devicePixelRatio || 1) * window.innerWidth > 1700 ? '2x' : '1x'
  );

  // Layout phase, so the parent's useLayoutEffect (GSAP entrance + parallax) sees the node.
  useImperativeHandle(ref, () => wrapRef.current, []);

  useEffect(() => {
    let alive = true;
    fetch(`${src}/manifest.json`)
      .then((r) => (r.ok ? r.json() : null))
      .then((m) => alive && setManifest(m))
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [src]);

  useEffect(() => {
    if (!manifest) return undefined;
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return undefined;
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const coarse = window.matchMedia?.('(pointer: coarse)').matches;

    const ctx = canvas.getContext('2d');
    const dir = `${src}/${density}`;
    const steps = manifest.steps;
    const dirs = DIRS.filter((d) => manifest.rays[d]);
    const frames = Object.fromEntries(dirs.map((d) => [d, new Array(steps).fill(null)]));
    let base = null;
    let center = null;

    let cancelled = false;
    let raf = 0;
    let visible = true;
    let drawW = 0;
    let drawH = 0;
    let shown = '';
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let lastMove = 0;
    let lastT = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round(wrap.clientWidth * dpr);
      const h = Math.round((w * manifest.size.h) / manifest.size.w);
      if (w && (w !== drawW || h !== drawH)) {
        drawW = w;
        drawH = h;
        canvas.width = w;
        canvas.height = h;
        shown = '';
        kick();
      }
    };

    const draw = (img, key) => {
      if (!base || !img || key === shown) return;
      const p = manifest.patch;
      const sx = drawW / manifest.size.w;
      const sy = drawH / manifest.size.h;
      const x = Math.round(p.x * sx);
      const y = Math.round(p.y * sy);
      const w = Math.round((p.x + p.w) * sx) - x;
      const h = Math.round((p.y + p.h) * sy) - y;
      ctx.clearRect(0, 0, drawW, drawH);
      ctx.drawImage(base, 0, 0, drawW, drawH);
      ctx.clearRect(x, y, w, h);
      ctx.drawImage(img, x, y, w, h); // one frame, full opacity
      shown = key;
    };

    const pick = () => {
      const mag = Math.hypot(cur.x, cur.y);
      if (mag < DEADZONE) return [center, 'c'];
      const a = Math.atan2(cur.y, cur.x); // 0 = right, +90deg = down (screen space)
      const sector = ((Math.round(a / (Math.PI / 4)) % 8) + 8) % 8;
      const d = DIRS[sector];
      const ray = frames[d];
      if (!ray) return [center, 'c'];
      const t = Math.min(1, (mag - DEADZONE) / (1 - DEADZONE));
      let i = Math.max(0, Math.min(steps - 1, Math.ceil(t * steps) - 1));
      if (!ray[i]) {
        let best = -1;
        for (let k = 0; k < steps; k++) if (ray[k] && (best < 0 || Math.abs(k - i) < Math.abs(best - i))) best = k;
        if (best < 0) return [center, 'c'];
        i = best;
      }
      return [ray[i], `${d}${i}`];
    };

    const tick = (now) => {
      raf = 0;
      if (cancelled || !visible) return;
      const dt = lastT ? Math.min(64, now - lastT) : 16.7;
      lastT = now;
      if (now - lastMove > IDLE_MS) {
        target.x = 0;
        target.y = 0;
      }
      const k = 1 - Math.exp(-dt / RESPONSE_MS);
      cur.x += (target.x - cur.x) * k;
      cur.y += (target.y - cur.y) * k;
      const [img, key] = pick();
      draw(img, key);
      if (Math.abs(target.x - cur.x) + Math.abs(target.y - cur.y) > 0.003) kick();
    };
    function kick() {
      if (!raf && !cancelled) {
        lastT = 0;
        raf = requestAnimationFrame(tick);
      }
    }

    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      if (!r.width) return;
      const fx = r.left + (manifest.face.x / manifest.size.w) * r.width;
      const fy = r.top + (manifest.face.y / manifest.size.h) * r.height;
      const R = Math.max(220, Math.min(window.innerWidth, window.innerHeight) * REACH);
      let x = (e.clientX - fx) / R;
      let y = (e.clientY - fy) / R;
      const m = Math.hypot(x, y);
      if (m > 1) {
        x /= m;
        y /= m;
      }
      target.x = x;
      target.y = y;
      lastMove = performance.now();
      kick();
      clearTimeout(onMove.idle);
      onMove.idle = setTimeout(kick, IDLE_MS + 50);
    };

    if (!coarse && !reduced) window.addEventListener('pointermove', onMove, { passive: true });

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) {
          shown = '';
          kick();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(wrap);
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    (async () => {
      [base, center] = await Promise.all([loadImg(`${dir}/base.webp`), loadImg(`${dir}/${manifest.center}`)]);
      if (cancelled || !base || !center) return;
      resize();
      draw(center, 'c');
      setReady(true);
      if (coarse || reduced) return; // touch / reduced motion: keep eye contact, skip downloads
      // far end of every ray first, then the middle, then fill in
      const order = [];
      const pri = [steps - 1, Math.floor(steps / 2) - 1, Math.floor(steps / 4) - 1];
      pri.forEach((i) => dirs.forEach((d) => order.push([d, i])));
      for (let i = 0; i < steps; i++) if (!pri.includes(i)) dirs.forEach((d) => order.push([d, i]));
      const worker = async () => {
        while (order.length && !cancelled) {
          const [d, i] = order.shift();
          frames[d][i] = await loadImg(`${dir}/${manifest.rays[d][i]}`);
        }
      };
      await Promise.all([worker(), worker(), worker(), worker()]);
    })();

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(onMove.idle);
      window.removeEventListener('pointermove', onMove);
      io.disconnect();
      ro.disconnect();
    };
  }, [manifest, density, src]);

  const ratio = manifest ? `${manifest.size.w} / ${manifest.size.h}` : '2492 / 1480';

  return (
    <div ref={wrapRef} className={`relative w-full select-none ${className}`} style={{ aspectRatio: ratio }}>
      <img
        src={`${src}/${density}/base.webp`}
        alt="Sai Nithin Goud K, 3D character portrait at his desk"
        className="absolute inset-0 w-full h-full object-contain"
        style={{ opacity: ready ? 0 : 1, transition: 'opacity 200ms' }}
        draggable={false}
        fetchpriority="high"
      />
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full" style={{ opacity: ready ? 1 : 0 }} />
    </div>
  );
});

HeroCharacter.displayName = 'HeroCharacter';

export default HeroCharacter;
