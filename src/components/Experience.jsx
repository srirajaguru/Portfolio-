import React from 'react';
import { experienceData } from '../data/experience';
import { 
  FaBriefcase, 
  FaCheckCircle, 
  FaBuilding, 
  FaUsers, 
  FaCodeBranch, 
  FaTools 
} from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FaBriefcase />
            <span>Internships & Experience</span>
          </div>
          <h2 className="section-title">Practical Work Experience</h2>
          <p className="section-subtitle">
            Hands-on software development internships demonstrating full-stack engineering, team coordination, task management, and practical problem-solving.
          </p>
        </div>

        <div className="experience-timeline">
          {experienceData.map((item) => (
            <div key={item.id} className="experience-item">
              <div 
                className="exp-marker"
                style={item.isProminent ? { borderColor: 'var(--accent-cyan)', boxShadow: '0 0 16px rgba(56, 189, 248, 0.8)' } : undefined}
              />
              
              <div 
                className="glass-card experience-card"
                style={
                  item.isProminent
                    ? {
                        border: '1px solid rgba(56, 189, 248, 0.35)',
                        boxShadow: '0 8px 32px -4px rgba(56, 189, 248, 0.15)',
                        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(13, 20, 36, 0.9) 100%)'
                      }
                    : undefined
                }
              >
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{item.role}</h3>
                    <div className="exp-company">
                      <FaBuilding style={{ fontSize: '0.95rem' }} />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    {item.badge && (
                      <span className={`badge ${item.isProminent ? 'badge-cyan' : 'badge-emerald'}`}>
                        {item.isProminent ? <FaUsers style={{ fontSize: '0.8rem' }} /> : <FaTools style={{ fontSize: '0.8rem' }} />}
                        <span>{item.badge}</span>
                      </span>
                    )}
                  </div>
                </div>

                {item.highlight && (
                  <div 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-sm)',
                      background: item.isProminent ? 'rgba(56, 189, 248, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                      border: item.isProminent ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid rgba(16, 185, 129, 0.25)',
                      color: item.isProminent ? 'var(--accent-cyan)' : 'var(--accent-emerald)',
                      fontSize: '0.8125rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      marginBottom: '16px'
                    }}
                  >
                    <HiOutlineSparkles style={{ fontSize: '0.875rem' }} />
                    <span>Focus: {item.highlight}</span>
                  </div>
                )}

                <p className="exp-description">
                  "{item.description}"
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <h4 
                    style={{ 
                      fontSize: '0.9375rem', 
                      fontWeight: 600, 
                      color: 'var(--text-primary)', 
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <FaCodeBranch style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem' }} />
                    <span>Key Responsibilities & Contributions:</span>
                  </h4>
                  <ul className="exp-highlights-list">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="exp-highlight-item">
                        <FaCheckCircle className="exp-highlight-icon" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 
                    style={{ 
                      fontSize: '0.8125rem', 
                      fontWeight: 600, 
                      color: 'var(--text-muted)', 
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '10px' 
                    }}
                  >
                    Technologies & Skills
                  </h4>
                  <div className="exp-skills-group">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
