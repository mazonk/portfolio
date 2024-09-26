import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { CSSPlugin } from 'gsap/CSSPlugin';
import './Skills.css';

gsap.registerPlugin(Draggable, ScrollToPlugin, MotionPathPlugin, CSSPlugin);

const Skills: React.FC = () => {
  const logosRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const logos = logosRef.current?.querySelectorAll('.logo');

    if (logos && logos.length > 0) {
      // Use GSAP's modifiers plugin to create a wrapping effect
      const tl = gsap.timeline({
        repeat: -1, // Infinite repeat
        defaults: { duration: 10, ease: 'linear' },
      });

      tl.to(logos, {
        x: '-=200%', // Move logos to the left
        modifiers: {
          x: gsap.utils.wrap(-200, 200), // Wrap the logos once they reach the end
        },
        stagger: {
          each: 1, // Stagger each logo
        },
      });
    }
  }, []);

  return (
    <div className="skills">
      <h1 className="skills-title">My Skills</h1>
      <div className="logos-container" ref={logosRef}>
        <img src="src/assets/html.png" alt="HTML" className="logo" />
        <img src="src/assets/css.png" alt="CSS" className="logo" />
        <img src="src/assets/javascript.png" alt="JavaScript" className="logo" />
        <img src="src/assets/csharp.png" alt="C#" className="logo" />
        <img src="src/assets/ts.png" alt="TypeScript" className="logo" />
        <img src="src/assets/node.webp" alt="Node.js" className="logo" />
        <img src="src/assets/tailwind.png" alt="Tailwind" className="logo" />
      </div>
    </div>
  );
};

export default Skills;
