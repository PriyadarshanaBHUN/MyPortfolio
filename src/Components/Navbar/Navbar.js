import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import TypingLogo from './TypingLogo';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const sectionId = hash.replace('#', '');
      const el = document.getElementById(sectionId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); 
      }
    }
  }, [location]);

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button onClick={() => handleNavClick('home')} className="logo-link" style={{ background: 'none', border: 'none' }}>
          <TypingLogo />
        </button>
        <ul className="nav-links">
          <li><button onClick={() => handleNavClick('home')}>Home</button></li>
          <li><button onClick={() => handleNavClick('about')}>About</button></li>
          <li><button onClick={() => handleNavClick('skills')}>Skills</button></li>
          <li><button onClick={() => handleNavClick('projects')}>Projects</button></li>
          <li><button onClick={() => handleNavClick('experience')}>Experience</button></li>
          <li><button onClick={() => handleNavClick('contact')}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
