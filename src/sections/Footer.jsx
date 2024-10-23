import logo from '../../public/assets/logo.png';

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-5">

      <a href="/">
            <img src={logo} alt="logo image" className="w-24 h-auto" />
          </a>
    </footer>
  );
};

export default Footer;
