import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'Abhishek shakya';
  const typingSpeed = 150; // milliseconds per character when typing
  const deletingSpeed = 200; // milliseconds per character when deleting
  const pauseTime = 2000; // pause before deleting

  useEffect(() => {
    let timeout;

    const handleTyping = () => {
      const currentLength = displayedText.length;

      if (!isDeleting && currentLength < fullText.length) {
        // Typing forward
        setDisplayedText(fullText.slice(0, currentLength + 1));
        timeout = setTimeout(handleTyping, typingSpeed);
      } else if (!isDeleting && currentLength === fullText.length) {
        // Finished typing, pause then start deleting
        timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentLength > 0) {
        // Deleting backward
        setDisplayedText(fullText.slice(0, currentLength - 1));
        timeout = setTimeout(handleTyping, deletingSpeed);
      } else if (isDeleting && currentLength === 0) {
        // Finished deleting, start typing again
        setIsDeleting(false);
        timeout = setTimeout(handleTyping, 500);
      }
    };

    timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting]);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight typewriter">{displayedText}<span className="cursor">|</span></span>
        </h1>
        <p className="hero-subtitle">Student | Learner | Developer | Creator</p>
        <p className="hero-description">
          I am here to learn and grow my skills in web development and create impactful digital experiences.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
