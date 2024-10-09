import React from 'react';
import './Navbar.css'; // Custom styles for the navbar
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import basePath from './imageRoute';

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    gsap.to(window, { duration: 1.5, scrollTo: `#${id}`, ease: "power2.inOut" });
  };

  return (
    <nav className="navbar">
      {/* Logo on the left */}
      <div className="navbar-logo">
        <img src={`..${basePath}/assets/logo.jpeg`}alt="Logo" onClick={() => scrollToSection('introduction')}/>
      </div>

      {/* Links on the right */}
      <div className="navbar-links">
        <a onClick={() => scrollToSection('aboutme')}>About Me</a>
        <a onClick={() => scrollToSection('timeline')}>Timeline</a>
        <a onClick={() => scrollToSection('projects')}>Projects</a>
        <a onClick={() => scrollToSection('skills')}>Skills</a>
        <a onClick={() => scrollToSection('footer')}>Get in touch!</a>

      </div>
    </nav>
  );
};

export default Navbar;
