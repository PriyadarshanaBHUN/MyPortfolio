import React, { useEffect, useState } from 'react';
import './TypingLogo.css';

const TypingLogo = () => {
  const fullText = 'UDARA N PRIYADARSHANA';
  const [displayed, setDisplayed] = useState('');
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayed(prev => prev + fullText[i]);
        setI(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [i, fullText]);

  return (
    <div className="typing-logo-wrapper">
      <h1 className="typing-logo-text">{displayed}</h1>
    </div>
  );
};

export default TypingLogo;
