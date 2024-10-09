import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from 'gsap/Draggable';
import './Timeline.css';

gsap.registerPlugin(ScrollTrigger, Draggable);

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
        y: 50,
        duration: 1.5,
        ease: "power2.out",
      });
    });

    // Create draggable items with constraints
    const items = gsap.utils.toArray('.timeline-item');
    items.forEach((item: any) => {
      Draggable.create(item, {
        type: "y", // Allow vertical dragging only
        bounds: {
          minY: 0, // Set minimum Y bound (you can adjust based on your layout)
          maxY: timelineRef.current ? timelineRef.current.offsetHeight - item.offsetHeight : 0, // Set maximum Y bound based on the timeline container height
        },
        onDrag: function() {
          const offset = this.y; // Get the current Y offset
          gsap.to(item, {
            y: offset, // Move item to the current Y offset
            duration: 0.2 // Duration for the movement
          });
        }
      });
    });
  }, []);

  return (
    <div className="timeline" ref={timelineRef}>
      <div className="timeline-title">
        <h1 className="timeline-title-text">Timeline</h1>
      </div>
      <div className="timeline-container">
        <div className="curve-path">
          <svg viewBox="0 0 100 600" preserveAspectRatio="none">
          <path
  d="
    M 10 300
    Q 30 100, 50 300
    T 90 300
    Q 110 500, 130 300
    T 170 300
    Q 190 100, 210 300
    T 250 300
    Q 270 500, 290 300
    T 330 300
  "
  stroke="#B08145"
  strokeWidth="2"
  fill="transparent"
/>          </svg>
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
