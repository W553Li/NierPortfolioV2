import React, { useEffect, useState } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export default function ShuffleText({ text, duration = 1000 }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!text) return;

    const finalText = text;
    const intervalDuration = duration / (finalText.length * 2);
    
    const interval = setInterval(() => {
      if (currentIndex >= finalText.length) {
        clearInterval(interval);
        return;
      }

      setDisplayText(prevText => {
        const shuffled = finalText.split('').map((char, i) => {
          if (i < currentIndex) return finalText[i];
          return characters[Math.floor(Math.random() * characters.length)];
        }).join('');
        
        return shuffled;
      });

      setCurrentIndex(prev => prev + 1);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [text, currentIndex]);

  // Show final text when animation is complete
  useEffect(() => {
    if (currentIndex >= text?.length) {
      setDisplayText(text);
    }
  }, [currentIndex, text]);

  return <span>{displayText || text}</span>;
}