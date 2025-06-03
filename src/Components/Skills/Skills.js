import React, { useState } from 'react';
import './Skills.css';
import myDetails from '../../mydetails';

const Skills = () => {
  const [activeTab, setActiveTab] = useState("professional");

  const skillList = myDetails.skills[activeTab];

  return (
    <section className="skills" id="skills">
      <div className='Skills_container'>
        <h2>My Skills</h2>

        {/* Toggle Buttons */}
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
        </div>

        {/* Skills List */}
        <ul className="skills-list">
          {skillList.map((skill, index) => (
            <li key={index} className='skills-item'>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
