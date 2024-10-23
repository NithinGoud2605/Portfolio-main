import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';

import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Skills from './sections/Skills.jsx';
import Roadmap from './sections/Roadmap.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Roadmap />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
