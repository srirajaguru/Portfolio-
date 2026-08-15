import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import { FaLaptopCode, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack & Web' },
    { id: 'ai-vision', label: 'AI & Computer Vision' }
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'fullstack') {
      return (
        project.category.includes('Full Stack') ||
        project.category.includes('E-Commerce') ||
        project.category.includes('Web') ||
        project.category.includes('Frontend')
      );
    }
    if (filter === 'ai-vision') {
      return project.category.includes('AI');
    }
    return true;
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FaLaptopCode />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="section-title">Featured Engineering Projects</h2>
          <p className="section-subtitle">
            A curated selection of enterprise platforms, edge AI surveillance systems, and full-stack web applications engineered for scalability and real-world utility.
          </p>
        </div>

        <div className="projects-filter-bar">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={`project-filter-btn ${filter === opt.id ? 'active' : ''}`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div 
          className="glass-card" 
          style={{ 
            marginTop: '48px', 
            padding: '24px 32px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div>
            <h4 style={{ fontSize: '1.0625rem', marginBottom: '4px' }}>Want to explore more source code & repositories?</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Check out my GitHub profile for open-source experiments, algorithms, and continuous development.
            </p>
          </div>
          <a
            href="https://github.com/srirajaguru"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <FaGithub />
            <span>Visit @srirajaguru</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
