import React, { useEffect } from 'react';
import './Home.css';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import myDetails from '../../mydetails';
import profileImg from '../../images/about.png'; 

const Home = () => {
  useEffect(() => {
    const pointerEffect = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', pointerEffect);
    return () => window.removeEventListener('mousemove', pointerEffect);
  }, []);

  return (
    <section className="home" id="home">
      <div className="animated-bg"></div>

      <div className="home-container">
        <div className="profile-section">
          <img src={profileImg} alt="Profile" className="profile-img" />
        </div>

        <div className="content-section">
          <h1>Hello, I'm</h1>
          <span className="name">{myDetails.name}</span>
          <h2>{myDetails.title}</h2>
          <p>I design and build beautiful web experiences using modern technologies.</p>
          <a
            href="https://drive.google.com/file/d/1vdJGMosEZLAfTxkMMgqr4rktooYX_0Yt/view?usp=sharing"
            className="btn-home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="social-icons-vertical">
        <a href={myDetails.Facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href={myDetails.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href={myDetails.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href={`mailto:${myDetails.email}`} target="_blank" rel="noopener noreferrer"><SiGmail /></a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>
    </section>
  );
};

export default Home;
