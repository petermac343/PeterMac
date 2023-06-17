import React, { useEffect, useState } from 'react';

const TypingEffect = ({ strings, speed = 1000, pause = 1500 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timer;

    // Typing animation logic
    const handleTyping = () => {
      if (currentLetterIndex < strings[currentWordIndex].length) {
        setDisplayText(prevText => prevText + strings[currentWordIndex][currentLetterIndex]);
        setCurrentLetterIndex(prevIndex => prevIndex + 1);
      } else {
        setCurrentLetterIndex(0);
        setDisplayText('');
        setCurrentWordIndex(prevIndex => (prevIndex + 1) % strings.length);
      }
    };

    // Set timers for typing and pausing
    timer = setTimeout(handleTyping, currentLetterIndex < strings[currentWordIndex].length ? speed : pause);

    return () => clearTimeout(timer);
  }, [currentWordIndex, currentLetterIndex, strings, speed, pause]);

  useEffect(() => {
    // Reset state when strings change
    setDisplayText('');
    setCurrentLetterIndex(0);
    setCurrentWordIndex(0);
  }, [strings]);

  return <span>{displayText}</span>;
};

export default TypingEffect;
