import React from 'react';
import gsap from 'gsap';
import './Introduction.css'; // Ensure this path is correct

const Introduction: React.FC = () => {
  return (
    <div className="introduction">
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
