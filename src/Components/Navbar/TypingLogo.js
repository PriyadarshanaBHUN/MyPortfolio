import React, { useEffect, useState } from 'react';
import './TypingLogo.css';

const TypingLogo = ({ mode = 'full' }) => {
  const fullText = 'U N PRIYADARSHANA.';
  const shortText = 'PRIYADARSHANA.';
  const text = mode === 'short' ? shortText : fullText;

  const [displayed, setDisplayed] = useState('');
  const [i, setI] = useState(0);

  useEffect(() => {
    setDisplayed('');
    setI(0);
  }, [text]);

  useEffect(() => {
    if (i < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(prev => prev + text[i]);
        setI(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [i, text]);

  return (
    <div className="typing-logo-wrapper">
      <h1 className="typing-logo-text">{displayed}<span className="cursor">|</span></h1>
    </div>
  );
};

export default TypingLogo;
