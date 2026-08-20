import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaArrowRight,
  FaEnvelope,
  FaCode,
  FaLayerGroup
} from 'react-icons/fa';
import profilePhoto from '../assets/profile/ooo.jpg';

const Hero = () => {
  const techPills = ['React', 'Django', 'Python', 'REST APIs', 'Java', 'SQL'];

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="bg-ambient-light" />

      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-greeting">
              <span>Hello, I'm</span>
              
            </div>

            <h1 className="hero-name-title">
              Sri Raja Guru M.
            </h1>

            <h2 className="hero-role-title">
              Full Stack Developer
            </h2>

            <div className="hero-tech-pills">
              {techPills.map((tech) => (
                <span key={tech} className="hero-tech-pill">
                  {tech}
                </span>
              ))}
            </div>

            <p className="hero-description">
              I build modern web applications and practical software solutions using full-stack technologies. I enjoy solving problems, learning emerging technologies, and leading with technology to create meaningful digital solutions.
            </p>

            <div className="hero-actions">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="btn btn-primary"
              >
                <span>View Projects</span>
                <FaArrowRight style={{ fontSize: '0.875rem' }} />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="btn btn-secondary"
              >
                <FaEnvelope style={{ color: 'var(--accent-cyan)' }} />
                <span>Contact Me</span>
              </a>
            </div>

            <div className="hero-socials">
              <span className="social-label">Connect:</span>
              <a
                href="https://github.com/srirajaguru"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/srirajaguru-m"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/919344998602"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="WhatsApp Chat"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-blob-wrapper">
              <div className="hero-blob-glow" />

              <div className="hero-blob-frame">
                <div className="hero-blob-inner">
                  <img
                    src={profilePhoto}
                    alt="Sri Raja Guru - Full Stack Developer"
                    className="hero-blob-img"
                    width="380"
                    height="400"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
