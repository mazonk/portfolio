import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Skills.css'; // Add your custom styles here

const Skills: React.FC = () => {
  const logosRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // GSAP animation to create a zoom effect on logos
    gsap.fromTo(
      logosRef.current?.children,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.3, // Adds delay between each logo animation
        ease: 'elastic.out(1, 0.75)', // Adds bounce effect to zoom
      }
    );
  }, []);

  return (
    <div className="skills">
      <h1 className="skills-title">My Skills</h1>
      <div className="logos-container" ref={logosRef}>
        <img src="src/assets/html.png" alt="HTML" className="logo" />
        <img src="src/assets/css.png" alt="CSS" className="logo" />
        <img src="src/assets/javascript.png" alt="JavaScript" className="logo" />
        <img src="src\assets\csharp.png" alt="c#" className="logo" />
        <img src="src/assets/ts.png" alt="TypeScript" className="logo" />
        <img src="src/assets/node.webp" alt="Node.js" className="logo" />
        <img src="src/assets/tailwind.png" alt="Tailwind" className="logo" />
      </div>
    </div>
  );
};

export default Skills;
