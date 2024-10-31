import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Timeline.css';

gsap.registerPlugin(ScrollTrigger);

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Loop through each timeline-item
    gsap.utils.toArray('.timeline-item').forEach((item: any) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item, // Set the trigger to the individual item
          start: "top bottom", // Animation starts when the top of the item reaches the bottom of the viewport
          end: "top center", // Animation ends when the top of the item reaches the center of the viewport
          toggleActions: "play reverse", // Plays the animation on scroll down, reverses on scroll up
          scrub: true,
        },
        opacity: 1,
        y: -50, // Animate from above
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
      <div className="timeline-container" ref={timelineRef}>
        <div className="timeline-item">
          <div className="timeline-checkpoint">
            <h2>2021</h2>
            <p>Started AP Degree in Computer Science</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-checkpoint">
            <h3>2023</h3>
            <p>First Internship at Deck 1</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-checkpoint">
            <h4>2023</h4>
            <p>R&D Assistant at Sternula</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-checkpoint">
            <h5>2024</h5>
            <p>Internship at Move2x</p>
          </div>
        </div>
        <div className="timeline-item">
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
