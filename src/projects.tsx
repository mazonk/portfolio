import React from 'react';
import './Projects.css'; // Add your custom styles here

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A cool web development project.',
    imageUrl: 'src/assets/sky.jpg', // Replace with your actual image path
    link: 'https://github.com/yourproject1', // Link to the project or demo
  },
  {
    id: 2,
    title: 'Deck 1',
    description: 'A dispatch app for helicopters. ',
    imageUrl: 'src/assets/greenleaf.jpg',
    link: 'https://github.com/DECK1xUCN/DispatchApp',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'A creative design portfolio.',
    imageUrl: 'src/assets/blue.jpg',
    link: 'https://github.com/yourproject2',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
