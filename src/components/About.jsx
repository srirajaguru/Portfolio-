import React from 'react';
import { 
  FaUserGraduate, 
  FaLaptopCode, 
  FaPuzzlePiece, 
  FaUsersCog,
  FaCheckCircle 
} from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';

const About = () => {
  const focusPillars = [
    {
      title: 'Full Stack Development',
      description: 'Building frontend and backend applications using React, Django, REST APIs and databases.',
      icon: <FaLaptopCode />,
      colorClass: ''
    },
    {
      title: 'Problem Solving',
      description: 'Developing strong programming, DSA and logical problem-solving skills.',
      icon: <FaPuzzlePiece />,
      colorClass: 'purple'
    },
    {
      title: 'Technology Leadership',
      description: 'Using technology to solve practical problems and helping teams move from ideas to working solutions.',
      icon: <FaUsersCog />,
      colorClass: 'emerald'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FaUserGraduate />
            <span>About Me</span>
          </div>
          <h2 className="section-title">Driven by Curiosity, Built on Practical Code</h2>
          <p className="section-subtitle">
            A Computer Science Engineering student committed to engineering robust web architectures, scalable backends, and intelligent systems.
          </p>
        </div>

        <div className="about-grid">
          <div className="glass-card about-text-card">
            <h3 className="about-lead">
              "I am a Computer Science Engineering student and aspiring Full Stack Developer passionate about building practical software solutions."
            </h3>

            <p className="about-paragraph">
              I work with React, Django, Python, Java, REST APIs, and databases, while continuously improving my problem-solving and software development skills. I enjoy turning ideas into scalable, user-focused applications and leading with technology.
            </p>

            <p className="about-paragraph">
              My engineering journey centers around practical application development: from designing intuitive frontend experiences and engineering enterprise-grade backend APIs, to exploring edge AI and computer vision models. I thrive in environments that challenge me to solve algorithmic problems, collaborate on team workflows, and build systems that deliver real-world utility.
            </p>

            <div className="about-quick-facts">
              <div className="fact-item">
                <span className="fact-label">Degree & Field</span>
                <span className="fact-value">B.E. Computer Science & Eng.</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Core Focus</span>
                <span className="fact-value">Full Stack Web & APIs</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Primary Stack</span>
                <span className="fact-value">React, Django, Python, SQL</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Interests</span>
                <span className="fact-value">Enterprise Systems, Edge AI, DSA</span>
              </div>
            </div>
          </div>

          <div className="about-focus-column">
            <h3 className="focus-pillars-title">
              <HiOutlineLightBulb style={{ color: 'var(--accent-cyan)' }} />
              <span>What I Focus On</span>
            </h3>

            <div className="focus-pillars-list">
              {focusPillars.map((pillar) => (
                <div key={pillar.title} className="glass-card focus-pillar-card">
                  <div className={`pillar-icon-box ${pillar.colorClass}`}>
                    {pillar.icon}
                  </div>
                  <div className="pillar-content">
                    <h4>{pillar.title}</h4>
                    <p>{pillar.description}</p>
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
