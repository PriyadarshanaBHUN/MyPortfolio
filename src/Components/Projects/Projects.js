import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';
import myDetails from '../../mydetails';
import { Link } from 'react-router-dom';


const Projects = () => {
  const projects = myDetails.projects.filter(p => p.featured).slice(0, 10);
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    timeoutRef.current = setTimeout(() => nextSlide(), 5000);
  };

  const stopAutoSlide = () => clearTimeout(timeoutRef.current);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [activeIndex]);
  
  return (
    <section className="projects" id="projects">
      <h2 className="section-heading">My Top Projects</h2>

      <div
        className="project-carousel"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <button className="nav-btn left" onClick={prevSlide}>❮</button>

        <div className="carousel-wrapper">
          {projects.map((project, index) => {
            let className = 'card';
            if (index === activeIndex) {
              className += ' active';
            } else if (
              index === (activeIndex - 1 + projects.length) % projects.length
            ) {
              className += ' left';
            } else if ((index === (activeIndex + 1) % projects.length)) {
              className += ' right';
            } else {
              className += ' hidden';
            }

            return (
              <div className={className} key={index}>
                <div className="card-content">
                  {project.image && (
                    <img
                      src={process.env.PUBLIC_URL + project.image}
                      alt={project.name}
                      className="project-image"
                      loading="lazy"
                    />
                  )}
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <button className="nav-btn right" onClick={nextSlide}>❯</button>
      </div>

      <Link to="/more-projects">
        <button className="view-all-btn">View All Projects</button>
      </Link>

    </section>
  );
};

export default Projects;
