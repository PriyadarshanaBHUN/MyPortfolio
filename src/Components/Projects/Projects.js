import React from 'react';
import './Projects.css';
import myDetails from '../../mydetails';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
     <div className="project-list">
        {myDetails.projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm mb-3">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
