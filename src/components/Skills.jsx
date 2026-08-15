import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import { 
  FaPython, 
  FaJava, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaServer, 
  FaDatabase, 
  FaGitAlt, 
  FaGithub, 
  FaEye, 
  FaCameraRetro, 
  FaBrain, 
  FaLayerGroup 
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiDjango, 
  SiPostgresql, 
  SiMysql, 
  SiPostman, 
  SiOpencv 
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

// Icon resolver helper
const renderSkillIcon = (iconName, color) => {
  const iconProps = { style: { color } };
  switch (iconName) {
    case 'FaPython': return <FaPython {...iconProps} />;
    case 'FaJava': return <FaJava {...iconProps} />;
    case 'SiJavascript': return <SiJavascript {...iconProps} />;
    case 'FaReact': return <FaReact {...iconProps} />;
    case 'FaHtml5': return <FaHtml5 {...iconProps} />;
    case 'FaCss3Alt': return <FaCss3Alt {...iconProps} />;
    case 'SiDjango': return <SiDjango {...iconProps} />;
    case 'FaServer': return <FaServer {...iconProps} />;
    case 'SiPostgresql': return <SiPostgresql {...iconProps} />;
    case 'SiMysql': return <SiMysql {...iconProps} />;
    case 'FaDatabase': return <FaDatabase {...iconProps} />;
    case 'FaGitAlt': return <FaGitAlt {...iconProps} />;
    case 'FaGithub': return <FaGithub {...iconProps} />;
    case 'VscVscode': return <VscVscode {...iconProps} />;
    case 'SiPostman': return <SiPostman {...iconProps} />;
    case 'FaEye': return <FaEye {...iconProps} />;
    case 'SiOpencv': return <SiOpencv {...iconProps} />;
    case 'FaCameraRetro': return <FaCameraRetro {...iconProps} />;
    case 'FaBrain': return <FaBrain {...iconProps} />;
    default: return <FaLayerGroup {...iconProps} />;
  }
};

const Skills = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterButtons = [
    { id: 'all', label: 'All Domains' },
    { id: 'programming', label: 'Programming' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Databases' },
    { id: 'tools', label: 'Tools' },
    { id: 'ai-vision', label: 'AI & Vision' }
  ];

  const filteredCategories = selectedFilter === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedFilter);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FaLayerGroup />
            <span>Technical Skills</span>
          </div>
          <h2 className="section-title">Tech Stack & Competencies</h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, frontend frameworks, backend engines, databases, and emerging AI tools I utilize.
          </p>
        </div>

        <div className="skills-filter-nav">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setSelectedFilter(btn.id)}
              className={`skill-filter-btn ${selectedFilter === btn.id ? 'active' : ''}`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="skills-category-grid">
          {filteredCategories.map((category) => (
            <div key={category.id} className="glass-card skill-category-card">
              <div className="skill-cat-header">
                <h3 className="skill-cat-title">{category.title}</h3>
                <span className="badge badge-cyan">{category.skills.length} Skills</span>
              </div>
              <p className="skill-cat-desc">{category.description}</p>

              <div className="skills-items-grid">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item-card">
                    <div className="skill-icon-wrap">
                      {renderSkillIcon(skill.icon, skill.color)}
                    </div>
                    <div className="skill-meta">
                      <div className="skill-name-row">
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-context">{skill.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

