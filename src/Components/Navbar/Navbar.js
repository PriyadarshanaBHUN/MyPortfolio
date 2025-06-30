import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import TypingLogo from './TypingLogo';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

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
    setMenuOpen(false); // close menu on mobile
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button onClick={() => handleNavClick('home')} className="logo-link">
          <TypingLogo />
        </button>

        <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><button onClick={() => handleNavClick('home')}>Home</button></li>
          <li><button onClick={() => handleNavClick('about')}>About</button></li>
          <li><button onClick={() => handleNavClick('skills')}>Skills</button></li>
          <li><button onClick={() => handleNavClick('projects')}>Projects</button></li>
          <li><button onClick={() => handleNavClick('experience')}>Experience</button></li>
          <li><button onClick={() => handleNavClick('contact')}>Contact</button></li>
        </ul>

        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === 'dark' ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
