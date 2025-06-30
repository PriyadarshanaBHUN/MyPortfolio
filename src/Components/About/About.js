import React from 'react';
import './About.css';
import profileImage from '../../images/profile.png';
import myDetails from '../../mydetails';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="about-text">
          <h2 className="animated-heading">About Me</h2>
          <p>
            I'm <strong>{myDetails.name}</strong>, an undergraduate student at the <strong>University of Peradeniya</strong>, pursuing a degree in <strong>Computer Science, Statistics, and Mathematics</strong>. I'm also studying for a <strong>Bachelor of Information Technology</strong> at <strong>UCSC, University of Colombo</strong>, and completing a <strong>Diploma in IT</strong> at <strong>IMBS Green Campus</strong>.
          </p>
          <p>
            My deep curiosity and passion for exploring new technologies drive my academic journey. I thrive on continuous learning and always strive to stay up-to-date with advancements in the IT field.
          </p>
          <p>
            Apart from tech, I am a creative soul—a sketch artist and a poet—which adds depth and innovation to my thinking. These creative outlets help balance my logical side with imagination and expression.
          </p>
          <p>
            From being a class leader in school to serving as a student union leader at the university, I’ve built strong <strong>leadership</strong> and <strong>team collaboration skills</strong>. My background in sports like sprinting and volleyball also instilled discipline and endurance in me.
          </p>
          <p>
            As I near the end of my undergraduate life, I see this not as a conclusion, but as the beginning of a lifelong journey in technology. I'm excited to continue learning, growing, and making a meaningful impact in the world of IT.
          </p>

          <div className="about-buttons">
             <Link to="/more-projects">
              <button className="btn">My Projects</button>
            </Link>           
            <Link to="/education">
              <button className="btn">Education</button>
            </Link>
            <Link to="/extras">
              <button className="btn">Extra Activities</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

