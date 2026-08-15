import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowUp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-text-row">
          <div>
            &copy; {new Date().getFullYear()} Sri Raja Guru. All rights reserved.
          </div>
            <div className="footer-socials">
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

           

            <button
              onClick={scrollToTop}
              className="back-to-top-btn"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <FaArrowUp />
            </button>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;
