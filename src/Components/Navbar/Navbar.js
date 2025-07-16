import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import TypingLogo from './TypingLogo';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
    closeMenu();
  };

  const aboutSubLinks = [
    { to: '/education', label: 'EDUCATION' },
    { to: '/extras', label: 'EXTRAS' },
    { to: '/more-projects', label: 'PROJECTS' }
  ];

  const sections = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT', submenu: aboutSubLinks },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const pageLinks = [
    { to: '/', label: 'HOME' },
    { to: '/about', label: 'ABOUT', submenu: aboutSubLinks },
    { to: '/education', label: 'EDUCATION' },
    { to: '/extras', label: 'EXTRAS' },
    { to: '/more-projects', label: 'PROJECTS' },
    { to: 'skills', label: 'SKILLS' },
    { to: '/contact', label: 'CONTACT' }
  ];

  const isHome = location.pathname === '/';

 
  const handleAboutMouseEnter = () => setAboutDropdown(true);
  const handleAboutMouseLeave = () => setAboutDropdown(false);


  const handleMobileAboutClick = () => setMobileAboutOpen(prev => !prev);

  return (
    <nav className="navbar">
      <div className="logo-area" onClick={isHome ? scrollToTop : undefined}>
        {isHome ? (
          <TypingLogo mode={isMobile ? 'short' : 'full'} />
        ) : (
          <RouterLink to="/" onClick={closeMenu}>
            <TypingLogo mode={isMobile ? 'short' : 'full'} />
          </RouterLink>
        )}
      </div>

      
      {!isMobile && (
        <ul className="nav-links">
          {isHome
            ? sections.map(section =>
                section.submenu ? (
                  <li
                    key={section.id}
                    className="has-dropdown"
                    onMouseEnter={handleAboutMouseEnter}
                    onMouseLeave={handleAboutMouseLeave}
                  >
                    <ScrollLink
                      to={section.id}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-80}
                    >
                      {section.label}
                    </ScrollLink>
                    {aboutDropdown && (
                      <ul className="dropdown">
                        {section.submenu.map(sublink => (
                          <li key={sublink.to}>
                            <RouterLink to={sublink.to}>{sublink.label}</RouterLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={section.id}>
                    <ScrollLink
                      to={section.id}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-80}
                    >
                      {section.label}
                    </ScrollLink>
                  </li>
                )
              )
            : pageLinks.map(link =>
                link.submenu ? (
                  <li
                    key={link.to}
                    className="has-dropdown"
                    onMouseEnter={handleAboutMouseEnter}
                    onMouseLeave={handleAboutMouseLeave}
                  >
                    <RouterLink to={link.to}>{link.label}</RouterLink>
                    {aboutDropdown && (
                      <ul className="dropdown">
                        {link.submenu.map(sublink => (
                          <li key={sublink.to}>
                            <RouterLink to={sublink.to}>{sublink.label}</RouterLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={link.to}>
                    <RouterLink to={link.to}>{link.label}</RouterLink>
                  </li>
                )
              )
          }
        </ul>
      )}

      
      {isMobile && (
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      )}

     
      {isMobile && (
        <ul className={`nav-links-mobile ${menuOpen ? 'active' : ''}`}>
          {isHome
            ? sections.map(section =>
                section.submenu ? (
                  <li key={section.id}>
                    <div
                      className="mobile-dropdown-toggle"
                      onClick={handleMobileAboutClick}
                    >
                      {section.label}
                    </div>
                    {mobileAboutOpen && (
                      <ul className="dropdown mobile-dropdown">
                        {section.submenu.map(sublink => (
                          <li key={sublink.to}>
                            <RouterLink to={sublink.to} onClick={closeMenu}>
                              {sublink.label}
                            </RouterLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={section.id}>
                    <ScrollLink
                      to={section.id}
                      smooth={true}
                      duration={500}
                      onClick={closeMenu}
                      spy={true}
                      offset={-70}
                    >
                      {section.label}
                    </ScrollLink>
                  </li>
                )
              )
            : pageLinks.map(link =>
                link.submenu ? (
                  <li key={link.to}>
                    <div
                      className="mobile-dropdown-toggle"
                      onClick={handleMobileAboutClick}
                    >
                      {link.label}
                    </div>
                    {mobileAboutOpen && (
                      <ul className="dropdown mobile-dropdown">
                        {link.submenu.map(sublink => (
                          <li key={sublink.to}>
                            <RouterLink to={sublink.to} onClick={closeMenu}>
                              {sublink.label}
                            </RouterLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={link.to}>
                    <RouterLink to={link.to} onClick={closeMenu}>
                      {link.label}
                    </RouterLink>
                  </li>
                )
              )
          }
        </ul>
      )}

      <div className="theme-toggle" onClick={() => setDarkMode(prev => !prev)}>
        {darkMode ? <FaSun /> : <FaMoon /> }
            </div>
    </nav>
  );
};

export default Navbar;