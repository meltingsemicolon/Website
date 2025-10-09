import React from 'react';
import './Projects.css';
import PMSImage from '../assets/PMS.png';
import TaxeaseImage from '../assets/Taxease.png';

const Projects = () => {
  const projects = [
    {
      title: 'Prison management system',
      description: 'Full-Stack Web Application | Next.js 15, TypeScript, React 19 following IEEE 830-1998 SRS standards as an academic project.',
      technologies: ['Next.js', 'TypeScript', 'React','lucid react','tailwindcss'],
      image: PMSImage,
      github: 'https://github.com/meltingsemicolon/PMS',
      demo: 'https://prisonmanagementsystem.vercel.app/'
    },
    {
      title: 'Tax ease Nepal',
      description: 'Developed during a hackathon Asianhack2025 with team name codeions designed to simplify Nepalese taxation processes.',
      technologies: ['React', 'vite'],
      image: TaxeaseImage,
      github: 'https://github.com/meltingsemicolon/Taxease',
      demo: 'https://taxease-six.vercel.app/'
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="icon">📂</i> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="icon">🔗</i> Demo
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
