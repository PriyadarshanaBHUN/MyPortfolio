import React, { useState, useEffect } from 'react';
import './Skills.css';
import myDetails from '../../mydetails';

const Skills = () => {
  const [activeTab, setActiveTab] = useState("professional");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setShowSkills(false); 
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skillList = myDetails.skills[activeTab];

  return (
    <section className="skills" id="skills">
      <div className="Skills_container">
        <h2>My Skills</h2>

       
        {!isMobile && (
          <>
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
            <ul className="skills-list active">
              {skillList.map((skill, index) => (
                <li key={index} className="skills-item">
                  {skill}
                </li>
              ))}
            </ul>
          </>
        )}

        {isMobile && !showSkills && (
          <div className="skills-toggle">
            <button
              className="category-btn"
              onClick={() => { setActiveTab("professional"); setShowSkills(true); }}
            >
              Professional
            </button>
            <button
              className="category-btn"
              onClick={() => { setActiveTab("personal"); setShowSkills(true); }}
            >
              Personal
            </button>
            <button
              className="category-btn"
              onClick={() => { setActiveTab("Languages"); setShowSkills(true); }}
            >
              Languages
            </button>
          </div>
        )}

        {isMobile && showSkills && (
          <>
            <button className="back-btn" onClick={() => setShowSkills(false)}>
              ← Back
            </button>
            <ul className="skills-list active">
              {skillList.map((skill, index) => (
                <li key={index} className="skills-item">
                  {skill}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default Skills;