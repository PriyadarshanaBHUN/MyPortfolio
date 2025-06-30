import React, { useState, useEffect } from 'react';
import './Skills.css';
import myDetails from '../../mydetails';

const Skills = () => {
  const [activeTab, setActiveTab] = useState("professional");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skillList = myDetails.skills[activeTab];

  return (
    <section className="skills" id="skills">
      <div className="Skills_container">
        <h2>My Skills</h2>

        <div className="skills-toggle">
          <button
            className={activeTab === "professional" ? "active-tab" : ""}
            onClick={() => setActiveTab("professional")}
          >
            Professional
          </button>
          <button
            className={activeTab === "personal" ? "active-tab" : ""}
            onClick={() => setActiveTab("personal")}
          >
            Personal
          </button>
          <button
            className={activeTab === "Languages" ? "active-tab" : ""}
            onClick={() => setActiveTab("Languages")}
          >
            Languages
          </button>
        </div>

       
        {(!isMobile || skillList.length > 0) && (
          <ul className="skills-list active">
            {skillList.map((skill, index) => (
              <li key={index} className="skills-item">
                {skill}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Skills;
