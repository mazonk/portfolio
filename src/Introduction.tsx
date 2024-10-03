import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import './Introduction.css'; // Ensure this path is correct
import basePath from './imageRoute';


const Introduction: React.FC = () => {
  useEffect(() => {
    // Create the breathing effect for the text
    const tl = gsap.timeline({ repeat: -1 }); // Repeat indefinitely

    tl.to('.intro-text h1',{
      scale: 1.05, // Scale up to 105%
      duration: 1, // Duration for scaling up
      ease: 'sine.inOut', // Easing for a smooth effect
    })
    .to('.intro-text h1', {
      scale: 1, // Scale back to original size
      duration: 1, // Duration for scaling down
      ease: 'sine.inOut',
    })
    .to('.intro-text h2', {
      scale: 1.05, // Scale up to 105% for h2
      duration: 1, // Duration for scaling up
      ease: 'sine.inOut',
    })
    .to('.intro-text h2', {
      scale: 1, // Scale back to original size
      duration: 1, // Duration for scaling down
      ease: 'sine.inOut',
    });

  }, []);

  

  return (
    <div className="lilita-one-regular">
      {/* Top Image Section */}
      <div className="image-container relative">
        <img src={`..${basePath}/assets/sky.jpg`} alt="A beautiful green leaf" className="top-image" />
        {/* Introduction Text */}
        <div className="intro-text absolute inset-0 flex items-center justify-center">
          <div className="text-container">
            <h1 className="text-5xl font-bold">Hi, I'm Katie</h1>
            <h2 className="text-2xl">Web Developer</h2>
          </div>
      </div>
    </div>

    </div>
  );
};

export default Introduction;
