import React, { useState, useEffect } from 'react';
import { 
  FaBars, 
  FaTimes, 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp,
  FaChevronRight 
} from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Glass effect toggle on scroll
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section spy
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="nav-brand" aria-label="Sri Raja Guru Homepage">
            <span className="nav-brand-tag">&lt;/&gt;</span>
            <span>Sri Raja Guru</span>
          </a>

          <nav className="nav-links-desktop" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-link-item">
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </nav>

          <div className="nav-cta-btn">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="btn btn-secondary btn-sm"
            >
              <HiOutlineSparkles style={{ color: 'var(--accent-cyan)' }} />
              <span>Let's Talk</span>
            </a>
          </div>

          <button
            className="nav-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      <div 
        className={`mobile-drawer-backdrop ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`} aria-hidden={!isMobileMenuOpen}>
        <div className="mobile-drawer-header">
          <div className="nav-brand">
            <span className="nav-brand-tag">&lt;/&gt;</span>
            <span>Sri Raja Guru</span>
          </div>
          <button 
            className="btn-icon"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
              >
                <span>{link.name}</span>
                <FaChevronRight style={{ fontSize: '0.8rem', opacity: 0.5 }} />
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-drawer-footer">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            Get In Touch
          </a>
          <div className="mobile-socials">
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
              href="https://www.linkedin.com/in/sri-raja-guru-m-79903a279"
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
      </div>
    </>
  );
};

export default Navbar;
