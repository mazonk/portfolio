import React, { useEffect } from 'react';
import gsap from 'gsap';
import './Introduction.css'; // Ensure this path is correct

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
      <div className="image-container">
        <img src="\src\assets\sky.jpg" alt="A beautiful green leaf" className="top-image" />
      </div>

      {/* Introduction Text */}
      <div className="intro-text flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold">Hi, I'm Katie</h1>
        <h2 className="text-2xl">Web Developer</h2>
      </div>
    </div>
  );
};

export default Introduction;
