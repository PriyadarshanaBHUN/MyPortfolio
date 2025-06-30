import React from "react";
import myDetails from "../../mydetails";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2>My Experience</h2>
        <div className="experience-list">
          {myDetails.Experience.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-header">
                <img
                  src={process.env.PUBLIC_URL + exp.image}
                  alt={exp.name}
                  className="experience-image"
                  loading="lazy"
                />
                <div>
                  <h3>{exp.role}</h3>
                  <h4>{exp.name}</h4>
                  <p className="exp-time">{exp.time}</p>
                </div>
              </div>
              <p className="exp-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
