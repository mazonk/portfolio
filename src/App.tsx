import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './App.css';
import Introduction from './Introduction';
import AboutMe from './AboutMe';
import Footer from './Footer'; // Ensure this file name matches your actual file
import Projects from './Projects'; // Ensure this file name matches your actual file
import Skills from './Skills'; // Ensure this file name matches your actual file

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    // Scale effect for Introduction section
    gsap.fromTo('.introduction', 
      { scale: 0, opacity: 0 }, 
      {
        scale: 1,
        opacity: 1,
        duration: 1.5, // Increase duration for slower scaling
        ease: 'power2.out', // Smooth easing function
        scrollTrigger: {
          trigger: '.introduction',
          start: 'top 90%', // Trigger when 10% of the section is visible (top is at 90% of the viewport)
          end: 'bottom top',
          scrub: 0.5, // Smooth scrubbing effect, the lower the number, the smoother the effect
        },
      }
    );

    // Scale effect for About Me section
    gsap.fromTo('.about-me', 
      { scale: 0.5, opacity: 0 }, 
      {
        scale: 1,
        opacity: 1,
        duration: 1.5, // Increase duration for slower scaling
        ease: 'power2.out', // Smooth easing function
        scrollTrigger: {
          trigger: '.about-me',
          start: 'top 90%', // Trigger when 10% of the section is visible (top is at 90% of the viewport)
          end: 'bottom top',
          scrub: 0.5, // Smooth scrubbing effect, the lower the number, the smoother the effect
        },
      }
    );
  }, []);

  return (
    <>
      <Introduction />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
};

export default App;
