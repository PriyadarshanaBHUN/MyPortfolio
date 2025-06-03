import React from 'react';
import './Home.css';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import myDetails from "../../mydetails";

const Home = () => {
  return (
    <section className="home" id="home">
     
      <div className="social-sidebar-right">
        <a href={myDetails.Facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href={myDetails.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={myDetails.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={myDetails.email} target="_blank" rel="noopener noreferrer">
          <SiGmail />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>

     
      <div className="home-content">
        <h1>Hello, I'm </h1>
           <span className="name">{myDetails.name} </span>
        <h2>{myDetails.title}</h2>
        <p>I design and build beautiful web experiences using modern technologies.</p>
        <a
          href="https://drive.google.com/file/d/1vdJGMosEZLAfTxkMMgqr4rktooYX_0Yt/view?usp=sharing"
          download
          className="btn btn-home"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
