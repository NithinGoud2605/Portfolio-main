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
              Software Engineer with experience owning and building scalable backend and full-stack systems, including REST APIs, event-driven services, and cloud-deployed applications. Currently serving as Founding Engineer at Anthum, where I lead end-to-end development of an AI-enabled marketplace—owning architecture across frontend, backend, and infrastructure, with real-time WebSockets, Redis caching, and AI-assisted product workflows.
              </p>
              <p className="grid-subtext">With a strong foundation in data structures, algorithms, and system design, I focus on delivering production-ready code, debugging live issues, and improving reliability across backend, databases, and cloud infrastructure. Proficient in Python, C++, Java, JavaScript, and SQL with hands-on experience in React, Next.js, Node.js, Django, Kafka, and AWS. Currently pursuing a Master's in Computer Science at the University of Cincinnati, with coursework in distributed systems, cloud computing, database systems, and machine learning.</p>

            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
