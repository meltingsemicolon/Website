import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'JavaScript', level: 60 },
    { name: 'React', level: 35 },
    { name: 'Node.js', level: 40 },
    { name: 'HTML/CSS', level: 82 },
    { name: 'Python', level: 75 },
    { name: 'Rust', level: 30 },
    { name: 'C/C++', level: 70 },
    { name: 'SQL', level: 60 },
    { name: 'Git', level: 86 },
    { name: 'Docker', level: 15 }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a passionate developer who loves creating beautiful and functional web applications. 
              With a strong foundation in modern web technologies, I strive to build user-friendly experiences 
              that make a difference.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open source, 
              or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="skills-section">
            <h3>My Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
