import Button from '../components/Button.jsx';
import HeroImage from '../../public/assets/final-ai-brush-removebg-4yhtxlg.png';

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative pt-20" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-12 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am 
        </p>
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          SAI NITHIN GOUD K
        </p>
        <p className="hero_tag text-gray_gradient text-2xl">SOFTWARE DEVELOPER</p>
      </div>

      <div className="col-span-1 my-4 xl:row-span-3 h-full relative">  {/* Added relative here */}
        <div className="card flex flex-col justify-end h-full">
          <img src={HeroImage} alt="Hero image" className="object-bottom" />
        </div>
      </div>

      <div className="w-full h-full absolute inset-0"></div>

      {/* Button only visible on screens smaller than laptop resolution */}
      <div className="absolute bottom-20 left-0 right-0 w-full z-10 c-space flex justify-center"> 
        <a href="#about" className="w-fit block lg:hidden"> {/* Hide on large screens */}
          <Button name="Know about me" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
