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
      title: "E-commerce & Real-Time Analytics Platform",
      subtitle: "Django · Spring Boot · Kafka · GraphQL · AWS EKS · Stripe",
      category: "Enterprise Platform",
      description: "End-to-end marketplace processing 5k orders/day with real-time analytics. Kafka streams ingest millions of events/second at 99.99% uptime with live recommendations and sub-100ms API response times.",
      features: [
        "JWT Authentication → Cart → Stripe Payment Flow",
        "Kafka Streams: Millions ev/s, 99.99% Uptime",
        "Partition-Affinity & Back-Pressure (+25% Throughput)",
        "Live Recommendations (Stock Mismatch -80%, Add-to-Cart +12%)",
        "REST & GraphQL APIs (p99 < 100ms)",
        "Jenkins → ECR → EKS Deployment (< 5 min)"
      ],
      technologies: ["Django", "Spring Boot", "Kafka", "GraphQL", "AWS EKS", "Stripe", "Prometheus", "Jenkins"],
      architecture: [
        "Microservices Architecture with API Gateway",
        "Event-Driven Design with Kafka Streams",
        "Containerized Deployment on Kubernetes",
        "Redis Caching Layer for Performance"
      ],
      metrics: [
        { value: "5k", label: "Orders/Day" },
        { value: "99.99%", label: "Uptime" },
        { value: "<100ms", label: "API Response" },
        { value: "+25%", label: "Throughput" }
      ],
      demoLink: "#",
      githubLink: "#",
      imageUrl: "/assets/projects/ecommerce-platform.jpg",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="80" height="60" rx="8" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M20 35h60M30 45h40M25 55h50" stroke="currentColor" strokeWidth="2"/>
          <circle cx="75" cy="25" r="3" fill="currentColor"/>
          <path d="M15 25L25 35L15 45" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M85 15L95 25L85 35" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="50" cy="70" r="3" fill="currentColor"/>
        </svg>
      ),
      color: "text-blue-400"
    },
    {
      id: 2,
      title: "MoneyScale",
      subtitle: "Scalable Personal Finance Tracker (Node.js, AWS)",
      category: "FinTech Application",
      description: "Cloud-native finance platform with AWS Lambda, EC2, and S3 for real-time expense monitoring and predictions. Features OAuth 2.0 security and ML-powered expense classification.",
      features: [
        "AWS Lambda, EC2 & S3 Cloud Architecture",
        "Real-time Expense Monitoring & Predictions",
        "OAuth 2.0 Secured User Access",
        "RESTful APIs with PostgreSQL Indexing",
        "ML Expense Classification Modules",
        "Time-Series Trend Forecasting"
      ],
      technologies: ["Node.js", "AWS Lambda", "AWS EC2", "AWS S3", "PostgreSQL", "OAuth 2.0", "ML/AI"],
      architecture: [
        "Serverless Architecture with AWS Lambda",
        "PostgreSQL with Optimized Indexing",
        "OAuth 2.0 Authentication Flow",
        "ML Pipeline for Expense Classification"
      ],
      metrics: [
        { value: "Real-time", label: "Processing" },
        { value: "OAuth 2.0", label: "Security" },
        { value: "ML-Powered", label: "Classification" },
        { value: "Scalable", label: "Architecture" }
      ],
      demoLink: "#",
      githubLink: "#",
      imageUrl: "/assets/projects/moneyscale.jpg",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M40 40h20v20H40z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M45 35v10M55 35v10M45 55v10M55 55v10" stroke="currentColor" strokeWidth="2"/>
          <circle cx="30" cy="30" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="70" cy="30" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="30" cy="70" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="70" cy="70" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      color: "text-green-400"
    },
    {
      id: 3,
      title: "Dehliver It!",
      subtitle: "Real-Time Hazard-Based Simulation (Unity, C#)",
      category: "Game Development",
      description: "Real-time hazard-avoidance delivery simulation with custom game loop, asynchronous timing logic, and optimized resource management for mobile deployment.",
      features: [
        "Real-time Hazard-Avoidance Simulation",
        "Unity with C# Scripting",
        "Modular State Management System",
        "Custom Asynchronous Game Loop",
        "Object Pooling & Dynamic Event Handling",
        "Optimized Draw Calls for Mobile"
      ],
      technologies: ["Unity", "C#", "Mobile Optimization", "State Management", "Object Pooling"],
      architecture: [
        "Component-Based Entity System",
        "Custom Game Loop with Async Logic",
        "Object Pooling for Performance",
        "Modular State Management"
      ],
      metrics: [
        { value: "60 FPS", label: "Performance" },
        { value: "Mobile", label: "Optimized" },
        { value: "Real-time", label: "Simulation" },
        { value: "Modular", label: "Design" }
      ],
      demoLink: "#",
      githubLink: "#",
      imageUrl: "/assets/projects/dehliver-it.jpg",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="30" width="60" height="40" rx="8" stroke="currentColor" strokeWidth="3" fill="none"/>
          <circle cx="30" cy="80" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="70" cy="80" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M35 45h30M35 55h25" stroke="currentColor" strokeWidth="2"/>
          <path d="M50 20L60 30L50 40L40 30Z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="15" cy="15" r="3" fill="currentColor"/>
          <circle cx="85" cy="25" r="3" fill="currentColor"/>
          <path d="M10 25L20 15M90 15L80 25" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      color: "text-purple-400"
    },
    {
      id: 4,
      title: "DDoS Detection Using CIC Flow Data",
      subtitle: "Python · Scikit-learn · XGBoost · CIC-IDS2017 · Flask",
      category: "Cybersecurity ML",
      description: "Advanced machine learning system for real-time DDoS attack detection using CIC-IDS2017 network flow data. Achieved 98%+ F1 score with ensemble models and sub-200ms prediction response time.",
      features: [
        "CIC-IDS2017 Network Flow Processing (80+ features/packet)",
        "Ensemble Models: Random Forest + XGBoost (98%+ F1 Score)",
        "SMOTE Balancing for Class Imbalance Handling",
        "Real-time Flask REST API (<200ms Response)",
        "PCA/t-SNE Anomaly Visualization with Seaborn",
        "UDP Floods & Slowloris Attack Detection"
      ],
      technologies: ["Python", "Scikit-learn", "XGBoost", "CIC-IDS2017", "Flask", "SMOTE", "PCA", "t-SNE", "Seaborn"],
      architecture: [
        "Ensemble ML Pipeline with Feature Selection",
        "Real-time Flask API for Predictions",
        "SMOTE for Class Imbalance Handling",
        "PCA/t-SNE for Anomaly Visualization"
      ],
      metrics: [
        { value: "98%+", label: "F1 Score" },
        { value: "<200ms", label: "Response" },
        { value: "80+", label: "Features" },
        { value: "Real-time", label: "Detection" }
      ],
      demoLink: "#",
      githubLink: "#",
      imageUrl: "/assets/projects/ddos-detection.jpg",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M30 30L70 70M70 30L30 70" stroke="currentColor" strokeWidth="4"/>
          <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="80" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="20" cy="80" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="80" cy="80" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M15 15L25 25M75 15L85 25M15 85L25 75M75 85L85 75" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      color: "text-red-400"
    },
    {
      id: 5,
      title: "Fully Automated YouTube Shorts Workflow",
      subtitle: "Make.com · Python · Gemini AI · Pollinations AI · Airtable · YouTube Studio",
      category: "AI Automation",
      description: "End-to-end automated pipeline generating YouTube Shorts from single title input. Achieved 3.6K views, 11.5 hrs watch time, +6 subscribers with zero manual editing using AI-powered storytelling and video generation.",
      features: [
        "Airtable Input Form → Full Video Pipeline",
        "Gemini AI: 12-Scene Emotional Story Generation",
        "Pollinations AI: Automated Image Generation",
        "Python Webhook: TTS + Subtitles + Video Rendering",
        "Make.com Orchestration (No-Code Integration)",
        "Results: 3.6K Views, 11.5hrs Watch Time, +6 Subs"
      ],
      technologies: ["Make.com", "Python", "Gemini AI", "Pollinations AI", "Airtable", "Google Drive", "YouTube Studio", "TTS", "Flask"],
      architecture: [
        "No-Code Automation with Make.com",
        "AI-Powered Content Generation Pipeline",
        "Serverless Python Webhook Processing",
        "Automated Video Rendering & Publishing"
      ],
      metrics: [
        { value: "3.6K", label: "Views" },
        { value: "11.5hrs", label: "Watch Time" },
        { value: "+6", label: "Subscribers" },
        { value: "0", label: "Manual Edits" }
      ],
      demoLink: "#",
      githubLink: "#",
      imageUrl: "/assets/projects/youtube-automation.jpg",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="25" width="70" height="50" rx="8" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M40 40L65 50L40 60Z" fill="currentColor"/>
          <circle cx="25" cy="15" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="50" cy="10" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="75" cy="15" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M20 20L30 30M45 15L55 25M70 20L80 30" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 85h60" stroke="currentColor" strokeWidth="3"/>
        </svg>
      ),
      color: "text-yellow-400"
    },
    {
      id: 6,
      title: "AI-Powered Résumé Evaluator",
      subtitle: "CrewAI · LangChain · OpenAI · MySQL · AWS Fargate",
      category: "AI/ML Platform",
      description: "Multi-agent LLM pipeline processing 100+ résumés per run with 0-100 fit scoring. Reduced recruiter screening from 3 hours to 15 minutes while matching human shortlists with 92% accuracy.",
      features: [
        "Multi-Agent LLM Pipeline (100+ résumés/run)",
        "0-100 Fit Score + Tags & Summaries Generation",
        "Recruiter Screening: 3h → 15min (92% Human Match)",
        "Auto-Scaling: 1k files/min ($0.047/100 résumés)",
        "Flask + React Dashboard for Results",
        "AWS Fargate Serverless Deployment"
      ],
      technologies: ["CrewAI", "LangChain", "OpenAI", "MySQL", "AWS Fargate", "Flask", "React", "Multi-Agent Systems"],
      architecture: [
        "Multi-Agent LLM System with CrewAI",
        "Serverless Deployment on AWS Fargate",
        "React Dashboard with Real-time Updates",
        "MySQL Database for Result Storage"
      ],
      metrics: [
        { value: "100+", label: "Résumés/Run" },
        { value: "15min", label: "Screening Time" },
        { value: "92%", label: "Human Match" },
        { value: "$0.047", label: "Cost/100 CVs" }
      ],
      demoLink: "#",
      githubLink: "#",
      imageUrl: "/assets/projects/resume-evaluator.jpg",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="15" width="60" height="70" rx="5" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M30 30h40M30 40h35M30 50h40M30 60h30" stroke="currentColor" strokeWidth="2"/>
          <circle cx="75" cy="25" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M70 20L75 25L85 15" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="15" cy="40" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="85" cy="60" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      color: "text-cyan-400"
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
    <section className="w-full py-12" id="projects" ref={projectsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-2 font-generalsans"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-gray-300 max-w-2xl mx-auto"
          >
            Real-world applications with measurable impact
          </motion.p>
        </div>

        {/* Project Container */}
        <div className="relative mx-16">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div 
              key={currentProject}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={pageTransition}
              className="bg-black-200/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
            >
              {/* Project Image Section - Compact Landscape */}
              <div className="relative w-full">
                <div 
                  className="w-full bg-gradient-to-br from-black-300 to-black-400 relative overflow-hidden"
                  style={{ aspectRatio: '21/9', maxHeight: '250px' }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12"></div>
                  </div>
                  
                  {/* Project Image Container */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Placeholder for actual project image */}
                    <div className="w-full h-full flex items-center justify-center relative">
                      {/* Project Icon as fallback */}
                      <div className={`${current.color} relative z-10`}>
                        <div className="absolute inset-0 bg-current opacity-10 rounded-full blur-2xl scale-125"></div>
                        <div className="relative transform hover:scale-110 transition-transform duration-500">
                          <div className="w-16 h-16 md:w-20 md:h-20">
                            {current.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Image placeholder overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black-400/20">
                        <div className="bg-black-400/90 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                          <div className="flex items-center space-x-2 text-gray-300">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
                            </svg>
                            <span className="text-xs font-medium">Project Screenshot</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Number Badge */}
                  <div className="absolute top-4 right-4 bg-black-300/90 text-white px-3 py-1 rounded-lg text-xs font-semibold border border-white/20 z-20">
                    #{current.id}
                  </div>
                  
                  {/* Project Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500/90 to-purple-500/90 text-white px-3 py-1 rounded-lg text-xs font-semibold border border-white/20 z-20">
                    {current.category}
                  </div>
                </div>
              </div>

              {/* Project Information Section */}
              <div className="p-5 lg:p-6">
                {/* Project Header */}
                <div className="mb-5">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 font-generalsans leading-tight">
                        {current.title}
                      </h3>
                      <p className="text-sm text-blue-300 mb-2 font-medium">
                        {current.subtitle}
                      </p>
                    </div>
                    {/* Action Buttons - Top Right */}
                    <div className="flex gap-2 ml-4">
                      <a 
                        href={current.demoLink} 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 py-1.5 rounded-lg transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 flex items-center space-x-1 text-xs"
                      >
                        <span>🚀</span>
                        <span>Demo</span>
                      </a>
                      <a 
                        href={current.githubLink} 
                        className="bg-black-300 hover:bg-black-200 text-white px-3 py-1.5 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40 font-semibold transform hover:scale-105 flex items-center space-x-1 text-xs"
                      >
                        <span>📂</span>
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {current.description}
                  </p>
                </div>

                {/* Project Details Grid */}
                <div className="grid lg:grid-cols-2 gap-5">
                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-base font-semibold text-white mb-2 font-generalsans flex items-center">
                      <span className="mr-1">🚀</span>
                      Key Achievements
                    </h4>
                    <div className="space-y-1.5">
                      {current.features.map((feature, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={projectsInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-start space-x-2 p-1.5 bg-black-300/30 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300"
                        >
                          <div className="w-1 h-1 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-gray-300 leading-relaxed text-xs">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technical Implementation */}
                  <div>
                    <h4 className="text-base font-semibold text-white mb-2 font-generalsans flex items-center">
                      <span className="mr-1">🛠️</span>
                      Tech Stack & Architecture
                    </h4>
                    <div className="space-y-2">
                      {/* Technologies */}
                      <div>
                        <h5 className="text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">Technologies</h5>
                        <div className="flex flex-wrap gap-1">
                          {current.technologies.map((tech, index) => (
                            <motion.span 
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={projectsInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              className="px-2 py-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white rounded-md border border-blue-500/30 hover:border-blue-400/50 transition-colors duration-300 font-medium text-xs"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Architecture Highlights */}
                      <div>
                        <h5 className="text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">Architecture</h5>
                        <div className="space-y-0.5">
                          {current.architecture?.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 text-xs text-gray-300">
                              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Performance Metrics */}
                      <div>
                        <h5 className="text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">Performance</h5>
                        <div className="grid grid-cols-2 gap-1.5">
                          {current.metrics?.map((metric, index) => (
                            <div key={index} className="bg-black-300/30 rounded-lg p-1.5 border border-white/10">
                              <div className="text-xs font-bold text-white">{metric.value}</div>
                              <div className="text-xs text-gray-400">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Outside Content */}
          <button 
            onClick={prevProject}
            className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 bg-black-300/90 hover:bg-black-200 p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 shadow-lg backdrop-blur-sm"
            aria-label="Previous project"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextProject}
            className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 bg-black-300/90 hover:bg-black-200 p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 shadow-lg backdrop-blur-sm"
            aria-label="Next project"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Project Navigation Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`transition-all duration-300 rounded-full flex items-center space-x-2 px-2 py-1 ${
                index === currentProject 
                  ? 'bg-blue-500 shadow-lg shadow-blue-500/30 text-white' 
                  : 'bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white'
              }`}
              aria-label={`Go to project ${index + 1}: ${project.title}`}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${
                index === currentProject ? 'bg-white' : 'bg-current'
              }`}></div>
              <span className="text-xs font-medium hidden sm:block">
                {project.title.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Project Stats Summary */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="text-center p-3 bg-black-200/30 rounded-xl border border-white/10 hover:border-white/20 transition-colors duration-300">
            <div className="text-xl font-bold text-blue-400 mb-1 font-generalsans">6</div>
            <div className="text-gray-300 font-medium text-xs">Production Projects</div>
          </div>
          <div className="text-center p-3 bg-black-200/30 rounded-xl border border-white/10 hover:border-white/20 transition-colors duration-300">
            <div className="text-xl font-bold text-green-400 mb-1 font-generalsans">25+</div>
            <div className="text-gray-300 font-medium text-xs">Technologies Used</div>
          </div>
          <div className="text-center p-3 bg-black-200/30 rounded-xl border border-white/10 hover:border-white/20 transition-colors duration-300">
            <div className="text-xl font-bold text-purple-400 mb-1 font-generalsans">99.99%</div>
            <div className="text-gray-300 font-medium text-xs">System Uptime</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;