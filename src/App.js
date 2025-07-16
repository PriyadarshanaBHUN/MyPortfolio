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
import MoreProjects from './Components/MoreProjects/MoreProjects';
import Education from './Components/Education/Education';
import Extras from './Components/Extras/Extras';

import ScrollToTop from './ScrollToTop';

import './App.css';
import './styles/global.css';

function MainContent() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/education" element={<Education />} />
        <Route path="/extras" element={<Extras />} />
        <Route path="/more-projects" element={<MoreProjects />} />

      </Routes>
    </>
  );
}

export default App;