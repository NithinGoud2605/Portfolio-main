import LazyImage from '../components/LazyImage.jsx';

const About = () => {
  return (
    
    <section className="w-full flex flex-col justify-center" id="about">
      <div className="c-space">
        <p className="head-text sm:text-3xl text-xl font-medium text-space_gradient text-center font-generalsans">ABOUT ME</p>
      
      <div className="my-10 grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-3 xl:row-span-3">
          <div className="grid-container">
            <LazyImage src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">I'm Sai Nithin Goud K</p>
              <p className="grid-subtext">
              Software Engineer specializing in AI-driven applications, full-stack development, and scalable cloud systems. Currently building AI-powered collaborative learning platforms at Nuubi, where I develop LLM-integrated microservices, real-time WebSocket APIs, and cross-platform mobile applications. Proficient in Python, C++, Java, and JavaScript with hands-on experience in LangChain, OpenAI API, React, Node.js, and AWS infrastructure.
              </p>
              <p className="grid-subtext">With a strong foundation in algorithms, data structures, and distributed systems, I'm passionate about developing intelligent, user-centric software optimized for performance and reliability. Currently pursuing Master of Engineering in Computer Science at the University of Cincinnati, continuously expanding expertise in modern software development practices, cloud computing, and AI/ML technologies. </p>

            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
