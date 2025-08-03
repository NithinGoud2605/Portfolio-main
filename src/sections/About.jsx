
const About = () => {
  return (
    
    <section className="w-full flex flex-col justify-center" id="about">
      <div className="c-space">
        <p className="head-text sm:text-3xl text-xl font-medium text-space_gradient text-center font-generalsans">ABOUT ME</p>
      
      <div className="my-10 grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-3 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">I’m Sai Nithin Goud K</p>
              <p className="grid-subtext">
              Currently pursuing my Master of Engineering in Computer Science at the University of Cincinnati, I am passionate about becoming a SOFTWARE Developer with expertise in both frontend and backend development. My focus is on developing dynamic and responsive web applications that provide seamless user experiences.
              </p>
              <p className="grid-subtext">I am proficient in React.js for building interactive and efficient user interfaces, and I'm expanding my backend skills with Python, utilizing frameworks such as Django and Flask. </p>

            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
