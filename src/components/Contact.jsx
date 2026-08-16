import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaLinkedin, 
  FaGithub, 
  FaWhatsapp,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, submitted: false, error: 'Please fill in all required fields.' });
      return;
    }

    // Direct mailto fallback or simulated success
    setStatus({ submitting: true, submitted: false, error: null });
    
    setTimeout(() => {
      const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:srirajaguru17@gmail.com?subject=${subject}&body=${body}`;
      
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FaEnvelope />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Connect & Build Together</h2>
          <p className="section-subtitle">
            Open for full-time opportunities, internships, technical collaborations, and software development discussions.
          </p>
        </div>

        <div className="contact-grid">
          <div className="glass-card contact-info-card">
            <h3 className="contact-info-title">Reach Out Directly</h3>
            <p className="contact-info-desc">
              Feel free to connect via email, LinkedIn, or WhatsApp. I am always open to discussing new engineering projects, software ideas, or internship opportunities.
            </p>

            <div className="contact-cards-stack">
              <a href="mailto:srirajaguru17@gmail.com" className="contact-direct-card">
                <div className="contact-card-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Email</span>
                  <span className="contact-card-value">srirajaguru17@gmail.com</span>
                </div>
              </a>

              <a href="https://wa.me/919344998602" target="_blank" rel="noopener noreferrer" className="contact-direct-card">
                <div className="contact-card-icon">
                  <FaWhatsapp />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">WhatsApp</span>
                  <span className="contact-card-value">+91 9344998602</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/srirajaguru-m" target="_blank" rel="noopener noreferrer" className="contact-direct-card">
                <div className="contact-card-icon">
                  <FaLinkedin />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">LinkedIn</span>
                  <span className="contact-card-value">linkedin.com/in/srirajaguru-m</span>
                </div>
              </a>

              <div className="contact-direct-card">
                <div className="contact-card-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Location</span>
                  <span className="contact-card-value">Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div 
              style={{
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(56, 189, 248, 0.06)',
                border: '1px solid rgba(56, 189, 248, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <HiOutlineSparkles style={{ color: 'var(--accent-cyan)', fontSize: '1.25rem', flexShrink: 0 }} />
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                Looking forward to contributing to exciting full-stack engineering and technology initiatives!
              </p>
            </div>
          </div>

          <div className="glass-card contact-form-card">
            <h3 className="contact-info-title" style={{ marginBottom: '20px' }}>Send a Message</h3>

            {status.submitted && (
              <div className="notification-banner success">
                <FaCheckCircle />
                <span>Thank you! Your email client has been opened to send your message.</span>
              </div>
            )}

            {status.error && (
              <div className="notification-banner error">
                <FaExclamationCircle />
                <span>{status.error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Your Email *</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full Stack Internship / Opportunity"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="form-textarea"
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <FaPaperPlane />
                <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
