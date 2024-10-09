import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { CSSPlugin } from 'gsap/CSSPlugin';
import './Skills.css';
import basePath from './imageRoute';

gsap.registerPlugin(Draggable, ScrollToPlugin, MotionPathPlugin, CSSPlugin);

const Skills: React.FC = () => {
  const logosRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const logos = logosRef.current?.querySelectorAll('.logo');

    if (logos && logos.length > 0) {
      // Create a timeline for the floating effect
      const tl = gsap.timeline({
        repeat: -1, // Infinite repeat
        defaults: { duration: 2, ease: 'power1.inOut' },
      });

      // Loop through each logo and apply the floating effect
      logos.forEach((logo, index) => {
        tl.to(logo, {
          y: -10, // Move the logo up
          scale: 1.1, // Scale up slightly
          yoyo: true, // Go back to the original position
          repeat: 1, // Repeat once for each logo
        }, index * 0.3); // Stagger the animation start time for each logo
      });
    }
  }, []);

  return (
    <div className="skills">
      <h1 className="skills-title">My Skills</h1>
      <div className="logos-container" ref={logosRef}>
        <img src={`..${basePath}/assets/html.png`} alt="HTML" className="logo" />
        <img src={`..${basePath}/assets/figma.png`} alt="Figma" className="logo" />
        <img src={`..${basePath}/assets/ts.png`} alt="TypeScript" className="logo" />
        <img src={`..${basePath}/assets/java.webp`} alt="java" className="logo" />
        <img src={`..${basePath}/assets/csharp.png`} alt="C#" className="logo" />
        <img src={`..${basePath}/assets/kafka.png`} alt="Kafka" className="logo" />
        <img src={`..${basePath}/assets/node.webp`} alt="Node.js" className="logo" />
        <img src={`..${basePath}/assets/tailwind.png`} alt="Tailwind" className="logo" />
        <img src={`..${basePath}/assets/ps.jpg`} alt="Adobe PS" className="logo" />
      </div>
    </div>
  );
};

export default Skills;
