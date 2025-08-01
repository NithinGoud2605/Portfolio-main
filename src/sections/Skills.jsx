import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.5, 
  });

  const logoVariants = {
    hidden: { opacity: 0, y: 40 }, 
    visible: { opacity: 1, y: 0 }, 
  };

  return (
    <section className="w-full flex flex-col justify-center" id="Skills" ref={skillsRef}>
      <div className="c-space">
        <p className="head-text sm:text-3xl text-xl font-medium text-space_gradient text-center font-generalsans">SKILLS</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* Front-End Technologies Container */}
        <div className="flex flex-col relative sm:p-10 py-10 px-5 shadow-2xl shadow-cosmic-purple/20 bg-space_gradient backdrop-blur-sm rounded-lg border border-cosmic-purple/30">
          <p className="font-bold mb-10 text-white-800 text-center">Front-End Technologies</p>
          <div className="grid grid-cols-3 gap-6"> {/* Adjust gap as needed */}
            {['html', 'css', 'javascript', 'bootstrap', 'react', 'tailwind-css','Unity','Blender'].map((tech, index) => (
              <div className="text-center" key={tech}>
                <motion.img
                  src={`/assets/Logos/${tech}.svg`}
                  alt={`${tech} logo`}
                  className="w-16 h-16 object-contain mx-auto"
                  initial="hidden"
                  animate={skillsInView ? 'visible' : 'hidden'}
                  variants={logoVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered effect
                />
                <p className="mt-2 text-sm text-white">{tech.charAt(0).toUpperCase() + tech.slice(1)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back-End Technologies Container */}
        <div className="flex flex-col relative sm:p-10 py-10 px-5 shadow-2xl shadow-cosmic-purple/20 bg-space_gradient backdrop-blur-sm rounded-lg border border-cosmic-purple/30">
          <p className="font-bold mb-10 text-white-800 text-center">Back-End & Tools</p>
          <div className="grid grid-cols-3 gap-10">
            {['python', 'c++', 'nodejs', 'django', 'Wagtail', 'sqlite', 'postgresql', 'docker', 'Github'].map((tech, index) => (
              <div className="text-center" key={tech}>
                <motion.img
                  src={`/assets/Logos/${tech}.svg`}
                  alt={`${tech} logo`}
                  className="w-16 h-16 object-contain mx-auto"
                  initial="hidden"
                  animate={skillsInView ? 'visible' : 'hidden'}
                  variants={logoVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered effect
                />
                <p className="mt-2 text-sm text-white">{tech.charAt(0).toUpperCase() + tech.slice(1)}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
