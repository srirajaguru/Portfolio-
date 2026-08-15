import React, { useState } from 'react';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCheckCircle, 
  FaInfoCircle
} from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';

const ProjectCard = ({ project }) => {
  const [demoNotice, setDemoNotice] = useState(false);

  const {
    title,
    category,
    badge,
    highlightTag,
    isFeatured,
    description,
    features,
    technologies,
    githubUrl,
    liveUrl,
    accentColor
  } = project;

  const handleDemoClick = (e) => {
    if (liveUrl === '#' || !liveUrl) {
      e.preventDefault();
      setDemoNotice(true);
      setTimeout(() => setDemoNotice(false), 4500);
    }
  };

  return (
    <article 
      className={`glass-card ${isFeatured ? 'project-card-featured' : 'project-card-standard'}`}
      style={{
        borderTop: `3px solid ${accentColor || 'var(--accent-cyan)'}`
      }}
    >
      <div className="project-card-header">
        <div className="project-badges-group">
          {badge && (
            <span className={`badge ${badge.includes('Featured') || badge.includes('Major') ? 'badge-cyan' : 'badge-emerald'}`}>
              <HiOutlineSparkles style={{ fontSize: '0.75rem' }} />
              {badge}
            </span>
          )}
          {highlightTag && (
            <span className="badge badge-purple">
              {highlightTag}
            </span>
          )}
        </div>
        <span className="project-category-tag">{category}</span>
      </div>

      <h3 className="project-title">{title}</h3>

      <p className="project-description">{description}</p>

      {features && features.length > 0 && (
        <ul className="project-features-list">
          {features.map((feature, idx) => (
            <li key={idx} className="feature-item">
              <FaCheckCircle className="feature-bullet" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="project-tech-tags">
        {technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      {demoNotice && (
        <div 
          className="notification-banner info" 
          style={{ 
            background: 'rgba(56, 189, 248, 0.1)', 
            border: '1px solid rgba(56, 189, 248, 0.3)', 
            color: 'var(--accent-cyan)',
            padding: '10px 14px',
            fontSize: '0.8125rem',
            marginBottom: '16px'
          }}
        >
          <FaInfoCircle />
          <span>Live demo is in private enterprise staging. Please check the code repository!</span>
        </div>
      )}

      <div className="project-actions">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-sm"
          aria-label={`View ${title} source code on GitHub`}
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        {liveUrl && liveUrl !== '#' ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            aria-label={`Open live demo of ${title}`}
          >
            <span>Live Demo</span>
            <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
          </a>
        ) : (
          <button
            onClick={handleDemoClick}
            type="button"
            className="btn btn-secondary btn-sm"
            style={{ opacity: 0.85 }}
            title="Preview demo status"
          >
            <span>Live Demo</span>
            <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
          </button>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
