import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Timeline.css';

gsap.registerPlugin(ScrollTrigger);

const Timeline: React.FC = () => {
    useEffect(() => {
        // Loop through each timeline-item
        gsap.utils.toArray('.timeline-item').forEach((item:any) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item, // Set the trigger to the individual item
              start: "top bottom", // Animation starts when the top of the item reaches the bottom of the viewport
              end: "top center", // Animation ends when the top of the item reaches the center of the viewport
              toggleActions: "play reverse", // Plays the animation on scroll down, reverses on scroll up
              scrub: true,
            },
            opacity: 1,
            y: 50,
            duration: 1.5,
            ease: "power2.out",
          });
        });
      }, []);
      

  return (
    <div className="timeline">
      <div className="timeline-title">
        <h1 className="timeline-title-text">Timeline</h1>
      </div>
      <div className="timeline-container">
        <div className="curve-path">
          <svg viewBox="0 0 100 600" preserveAspectRatio="none">
            <path d="M 10 10 Q 50 150, 90 300 T 90 600" stroke="#B08145" strokeWidth="2" fill="transparent" />
          </svg>
        </div>
        <div className="timeline-item" style={{ top: "6vw", left: "10%" }}>
          <div className="timeline-checkpoint">
            <h2>2021</h2>
            <p>Started AP Degree in Computer Science</p>
          </div>
        </div>
        <div className="timeline-item" style={{ top: "13vw", left: "30%" }}>
          <div className="timeline-checkpoint">
            <h3>2023</h3>
            <p>First Internship at Deck 1</p>
          </div>
        </div>
        <div className="timeline-item" style={{ top: "19vw", left: "50%" }}>
          <div className="timeline-checkpoint">
            <h4>2023</h4>
            <p>R&D Assistant at Sternula</p>
          </div>
        </div>
        <div className="timeline-item" style={{ top: "25vw", left: "70%" }}>
          <div className="timeline-checkpoint">
            <h5>2024</h5>
            <p>Internship at Move2x</p>
          </div>
        </div>
        <div className="timeline-item" style={{ top: "30vw", left: "90%" }}>
          <div className="timeline-checkpoint">
            <h6>2024</h6>
            <p>Started Bachelor in Web Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
