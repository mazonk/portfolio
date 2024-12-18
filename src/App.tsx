import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './App.css';
import Introduction from './Introduction';
import Timeline from './Timeline';
import AboutMe from './AboutMe';
import Footer from './footer'; // Ensure this file name matches your actual file
import Projects from './projects'; // Ensure this file name matches your actual file
import Skills from './Skills'; // Ensure this file name matches your actual file
import Navbar from './Navbar';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    requestAnimationFrame(() => {
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
          end: 'bottom 70%',
          scrub: 0.3, // Smooth scrubbing effect, the lower the number, the smoother the effect
        
    }
      });
      }, );

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
      <div>
        <div className="gradient-background"></div>
        <Navbar />
        <section id="introduction">
          <Introduction />
        </section>
        <section id="aboutme">
          <AboutMe />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
      
    );
  };

export default App;
