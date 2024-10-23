const Skills = () => {
  return (
    <section className="c-space my-20">
      <p className="head-text sm:text-3xl text-xl font-medium text-white text-center font-generalsans">SKILLS</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* Front-End Technologies Container */}
        <div className="flex flex-col relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <p className="font-bold mb-10 text-white">Front-End Technologies</p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <img src="/assets/Logos/html.svg" alt="HTML logo" className="w-12 h-12 object-contain mx-auto" />
              <p className="mt-2 text-sm text-white">HTML</p>
            </div>
            <div className="text-center">
              <img src="/assets/Logos/css.svg" alt="CSS logo" className="w-12 h-12 object-contain mx-auto" />
              <p className="mt-2 text-sm text-white">CSS</p>
            </div>
            <div className="text-center">
              <img src="/assets/Logos/javascript.svg" alt="JavaScript logo" className="w-12 h-12 object-contain mx-auto" />
              <p className="mt-2 text-sm text-white">JavaScript</p>
            </div>
            <div className="text-center">
              <img src="/assets/Logos/bootstrap.svg" alt="Bootstrap logo" className="w-12 h-12 object-contain mx-auto" />
              <p className="mt-2 text-sm text-white">Bootstrap</p>
            </div>
            <div className="text-center">
              <img src="/assets/Logos/react.svg" alt="React logo" className="w-12 h-12 object-contain mx-auto" />
              <p className="mt-2 text-sm text-white">React</p>
            </div>
            <div className="text-center">
              <img src="/assets/Logos/tailwind-css.svg" alt="Tailwind CSS logo" className="w-12 h-12 object-contain mx-auto" />
              <p className="mt-2 text-sm text-white">Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/* Back-End Technologies Container */}
        <div className="flex flex-col relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <p className="font-bold mb-10 text-white">Back-End & Tools</p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <img src="/assets/Logos/python.svg" alt="Python logo" className="w-12 h-12 object-contain mx-auto" />
              <p className="mt-2 text-sm text-white">Python</p>
            </div>
            <div className="text-center">
              <img src="/assets/Logos/c++.svg" alt="C++ logo" className="w-12 h-12 object-contain mx-auto" />
              <p className="mt-2 text-sm text-white">C++</p>
            </div>
            <div className="text-center">
              <img src="/assets/Logos/nodejs.svg" alt="Node.js logo" className="w-12 h-12 object-contain mx-auto" />
              <p className="mt-2 text-sm text-white">Node.js</p>
            </div>
            <div className="text-center">
              <img src="/assets/Logos/django.svg" alt="Django logo" className="w-12 h-12 object-contain mx-auto" />
              <p className="mt-2 text-sm text-white">Django</p>
            </div>
            <div className="text-center ">
              <img src="/assets/Logos/Wagtail.svg" alt="Wagtail logo" className="w-12 h-12 object-contain mx-auto" />
              <p className="mt-2 text-sm text-white">Wagtail</p>
            </div>
            <div className="text-center">
              <img src="/assets/Logos/sqlite-icon.svg" alt="SQLite logo" className="w-12 h-12 object-contain mx-auto"  />
              <p className="mt-2 text-sm text-white">SQLite</p>
            </div>
            <div className="text-center">
              <img src="/assets/Logos/postgresql.svg" alt="PostgreSQL logo" className="w-12 h-12 object-contain mx-auto" />
              <p className="mt-2 text-sm text-white">PostgreSQL</p>
            </div>
            <div className="text-center">
              <img src="/assets/Logos/docker.svg" alt="Docker logo" className="w-12 h-12 object-contain mx-auto" />
              <p className="mt-2 text-sm text-white">Docker</p>
            </div>
            <div className="text-center">
              <img src="/assets/Logos/Github.svg" alt="GitHub logo" className="w-12 h-12 object-contain mx-auto" />
              <p className="mt-2 text-sm text-white">GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
