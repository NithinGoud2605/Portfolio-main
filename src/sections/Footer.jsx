import SocialMedia from '../components/SocialMedia.jsx';

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300">
      <div className="flex flex-col items-center gap-6">
        <div className="flex justify-center items-center flex-wrap gap-5">
          <a href="/">
            <img src="/assets/logo.png" alt="logo image" className="w-24 h-auto" />
          </a>
        </div>
        
        {/* Social Media Links */}
        <SocialMedia />
        
        <p className="text-gray-400 text-sm">
          © 2024 Sai Nithin Goud K. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
