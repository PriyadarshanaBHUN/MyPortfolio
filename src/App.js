import React, { useEffect, Component } from 'react';
import { Routes, Route } from 'react-router-dom';

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

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '4rem', textAlign: 'center' }}>
          <h2>Something went wrong</h2>
          <p>{this.state.error?.message || 'Unknown error'}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function MainContent() {
  useEffect(() => {
    console.log('MainContent rendered, pathname:', window.location.pathname);
  }, []);

  return (
    <ErrorBoundary>
      <div className="main-content">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

function NotFound() {
  return (
    <div style={{ padding: '4rem', textAlign: 'center' }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  useEffect(() => {
    console.log('App rendered, pathname:', window.location.pathname);
  }, []);

  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MainContent />} />
        <Route path="/education" element={<Education />} />
        <Route path="/extras" element={<Extras />} />
        <Route path="/more-projects" element={<MoreProjects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;