import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import { EMAILJS_CONFIG } from '../config/emailjs.js';

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Check if EmailJS is properly configured
    if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' || 
        EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
        EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      setLoading(false);
      showAlert({
        show: true,
        text: "Please configure EmailJS credentials in src/config/emailjs.js 😢",
        type: 'danger',
      });
      return;
    }

    // Match the exact template variables from your EmailJS dashboard
    const templateParams = {
      from_name: form.name,
      from: form.name, // matches {{from}}
      to: form.email, // matches {{to}}
      subject: 'Portfolio Contact Form', // matches {{subject}}
      html: form.message, // matches {{html}}
    };

    emailjs
      .send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message! I\'ll get back to you soon 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert();
            setForm({ name: '', email: '', message: '' });
          }, 5000);
        },
        (error) => {
          console.error('FAILED...', error);
          setLoading(false);
          showAlert({
            show: true,
            text: "Email service error. Please contact me directly at sainithingoudk@gmail.com 😢",
            type: 'danger',
          });
        }
      );
  };

  const handleDirectEmail = () => {
    const subject = encodeURIComponent('Portfolio Contact - ' + form.name);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:sainithingoudk@gmail.com?subject=${subject}&body=${body}`);
  };

  return (
    <section className="w-full flex flex-col justify-center" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="c-space relative flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />

        {/* Moved contact-container down */}
        <div style={{ height: "100px" }}></div>
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
          Feel free to reach out—I'm always excited to learn, grow, and contribute!
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
                aria-label="Full Name"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
                aria-label="Email Address"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
                aria-label="Message"
              />
            </label>

            <div className="flex flex-col space-y-3">
              <button className="field-btn" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
                <svg className="w-2.5 h-2.5 object-contain invert brightness-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
              
              {/* Fallback direct email button */}
              <button 
                type="button" 
                onClick={handleDirectEmail}
                className="bg-black-400 hover:bg-black-300 px-5 py-2 min-h-12 rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3 transition-all duration-300"
              >
                Send via Email Client
                <svg className="w-2.5 h-2.5 object-contain invert brightness-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
