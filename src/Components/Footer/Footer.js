import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa';
import './Footer.css';
import myDetails from '../../mydetails';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="title">Thank you for visiting</div>
      <div className="subtitle">Let’s connect — Follow me</div>

      <div className="footer-socials">
        <a href={myDetails.github} target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href={myDetails.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href={myDetails.Facebook} target="_blank" rel="noreferrer"><FaFacebook /></a>
        <a href={myDetails.email}><FaEnvelope /></a>
      </div>



      <div className="footer-bottom">© {new Date().getFullYear()} {myDetails.name}. All rights reserved.</div>
    </footer>
  );
};

export default Footer;

