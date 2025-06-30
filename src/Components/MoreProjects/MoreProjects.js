import React from 'react';
import './MoreProjects.css';
import myDetails from '../../mydetails';
import Footer from '../Footer/Footer';

const MoreProjects = () => {
  return (
    <section className="more-projects">
      <h2>All Projects</h2>
      <div className="project-grid">
        {myDetails.projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
              {project.image && (
                <img
                  src={process.env.PUBLIC_URL + project.image}
                  alt={project.name}
                  className="project-image"
                  loading="lazy"
                />
              )}
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default MoreProjects;
