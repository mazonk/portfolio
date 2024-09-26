import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <div className="about-me">
    <div className="content">
      <div className="image-container">
        <img src="\src\assets\me.JPG" alt="My Picture" className="profile-image" />
      </div>
      <div className="text-container">
        <h1>About Me</h1>
        <p>
          I'm a passionate web developer and designer. I specialize in crafting elegant, modern web experiences with a playful twist.
          I love building projects with creativity at their core and ensuring the web remains a space where everyone can express their unique, bold ideas.
        </p>
      </div>
    </div>
  </div>
);
};

export default AboutMe;