import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import Education from './Components/Education/Education';
import Extras from './Components/Extras/Extras';

import './App.css';
import './styles/global.css';

function App() {
  const location = useLocation();

  // Check if the current route is /education or /extras
  const isCustomPage = location.pathname === '/education' || location.pathname === '/extras';

  return (
    <>
      <Navbar />
      {isCustomPage ? (
        <Routes>
          <Route path="/education" element={<Education />} />
          <Route path="/extras" element={<Extras />} />
        </Routes>
      ) : (
        <>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
