import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.3, 
  });
  
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      subtitle: "Full-Stack Shopping Experience",
      description: "A comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, payment processing, and admin dashboard.",
      features: [
        "User Authentication & Authorization",
        "Product Management System",
        "Shopping Cart & Checkout",
        "Payment Integration (Stripe)",
        "Order Tracking & History",
        "Admin Dashboard"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "JWT", "Express"],
      demoLink: "#",
      githubLink: "#",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="80" height="60" rx="8" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M20 35h60M30 45h40M25 55h50" stroke="currentColor" strokeWidth="2"/>
          <circle cx="75" cy="25" r="3" fill="currentColor"/>
          <path d="M15 25L25 35L15 45" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      color: "text-blue-400"
    },
    {
      id: 2,
      title: "Task Management System",
      subtitle: "Collaborative Productivity Tool",
      description: "A real-time collaborative task management application with team features, project organization, and progress tracking.",
      features: [
        "Real-time Collaboration",
        "Project & Task Organization",
        "Team Member Management",
        "Progress Tracking",
        "Deadline Notifications",
        "File Attachments"
      ],
      technologies: ["React", "Express", "MongoDB", "Socket.io", "Node.js", "Material-UI"],
      demoLink: "#",
      githubLink: "#",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="15" width="70" height="70" rx="10" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M25 35h20M25 50h35M25 65h25" stroke="currentColor" strokeWidth="2"/>
          <circle cx="60" cy="35" r="3" fill="currentColor"/>
          <path d="M55 50L60 55L70 45" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="55" y="62" width="8" height="8" fill="currentColor"/>
        </svg>
      ),
      color: "text-green-400"
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      subtitle: "Data Visualization & Forecasting",
      description: "Interactive weather dashboard with real-time data, advanced charts, forecasting, and location-based weather information.",
      features: [
        "Real-time Weather Data",
        "7-Day Forecast",
        "Interactive Charts",
        "Location Search",
        "Weather Maps",
        "Historical Data Analysis"
      ],
      technologies: ["React", "D3.js", "OpenWeather API", "Chart.js", "Tailwind", "Axios"],
      demoLink: "#",
      githubLink: "#",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="35" cy="40" r="15" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M20 40h30M35 25v30M27 32l16 16M43 32L27 48" stroke="currentColor" strokeWidth="2"/>
          <path d="M55 65c0-8 6-15 15-15s15 7 15 15-6 15-15 15H60c-3 0-5-2-5-5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M60 75l3-3M70 75l3-3M80 75l3-3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      color: "text-yellow-400"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      subtitle: "Performance Tracking Dashboard",
      description: "Comprehensive social media analytics platform with engagement metrics, audience insights, and performance reporting.",
      features: [
        "Multi-platform Integration",
        "Engagement Analytics",
        "Audience Demographics",
        "Content Performance",
        "Automated Reports",
        "Growth Tracking"
      ],
      technologies: ["React", "Python", "Django", "Chart.js", "PostgreSQL", "Redis"],
      demoLink: "#",
      githubLink: "#",
      icon: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="25" width="25" height="50" rx="5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="45" y="35" width="25" height="40" rx="5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <rect x="75" y="15" width="10" height="60" rx="5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M20 85L30 75L50 80L70 70L90 60" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="90" cy="60" r="2" fill="currentColor"/>
        </svg>
      ),
      color: "text-pink-400"
    }
  ];

  const nextProject = () => {
    setDirection(1);
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setDirection(index > currentProject ? 1 : -1);
    setCurrentProject(index);
  };

  const pageVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        rotateY: direction > 0 ? 45 : -45,
        scale: 0.8
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        rotateY: direction < 0 ? -45 : 45,
        scale: 0.8
      };
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

  const [direction, setDirection] = useState(0);

  const current = projects[currentProject];

  return (
    <section className="w-full flex flex-col justify-center" id="projects" ref={projectsRef}>
      <div className="c-space">
        <p className="head-text sm:text-3xl text-xl font-medium text-space_gradient text-center font-generalsans">PROJECTS</p>

        <div className="relative mt-12">
          {/* Navigation Arrows */}
          <button 
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black-300/80 hover:bg-black-300 p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/10"
            aria-label="Previous project"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black-300/80 hover:bg-black-300 p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/10"
            aria-label="Next project"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

                    {/* Project Container */}
          <div className="relative mx-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div 
                key={currentProject}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={pageTransition}
                className="grid-container"
              >
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
                  {/* Project Info */}
                  <div className="text-center lg:text-left">
                    {/* Project Icon */}
                    <div className={`${current.color} mb-6 flex justify-center lg:justify-start`}>
                      <div className="transform hover:scale-110 transition-transform duration-300">
                        {current.icon}
                      </div>
                    </div>
                    
                    {/* Project Title & Description */}
                    <h3 className="grid-headtext mb-2">{current.title}</h3>
                    <p className="text-lg text-blue-300 mb-4 font-generalsans">{current.subtitle}</p>
                    <p className="grid-subtext mb-6">{current.description}</p>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4 justify-center lg:justify-start mb-6">
                      <a 
                        href={current.demoLink} 
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 font-generalsans"
                      >
                        Live Demo
                      </a>
                      <a 
                        href={current.githubLink} 
                        className="bg-black-500 hover:bg-black-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 border border-white/20 font-generalsans"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>

                  {/* Features & Technologies */}
                  <div className="space-y-6">
                    {/* Key Features */}
                    <div>
                      <h4 className="grid-headtext mb-4">Key Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {current.features.map((feature, index) => (
                          <div key={index} className="flex items-center grid-subtext text-sm">
                            <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div>
                      <h4 className="grid-headtext mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {current.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 text-sm bg-black-300/50 text-blue-300 rounded-full border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to project ${index + 1}: ${projects[index].title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;