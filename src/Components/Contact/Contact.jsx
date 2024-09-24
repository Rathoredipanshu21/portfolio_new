import React, { useState } from 'react';
import './Contace.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>If you'd like to reach out, please fill out the form below!</p>
        <p>Drop </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: <a href="mailto:rathoredipanshu21@gmail.com">rathoredipanshu21@gmail.com</a></p>
          <p>Phone: <a href="tel:+916201403690">+91 62014 03690</a></p>
          <p>Location: Dhanbad, Jharkhand</p>
          <p>Location: Banka , Bihar </p>
        </div>
      </div>

      <div 
        className="social-icons" 
        style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px', 
          marginTop: '20px' 
        }}
      >
        <a 
          href="https://github.com/Rathoredipanshu21" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ fontSize: '24px', color: '#333' }}
        >
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </a>

        <a 
          href="https://www.linkedin.com/in/dipanshu-rathore-3549672a8/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ fontSize: '24px', color: '#0A66C2' }}
        >
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>

        <a 
          href="https://www.instagram.com/r.a.t.h.o.r.e21/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ fontSize: '24px', color: '#E1306C' }}
        >
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>

        <a 
          href="https://www.facebook.com/dipanshu.rathore.589/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ fontSize: '24px', color: '#4267B2' }}
        >
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        </a>

        <a 
          href="https://x.com/rathore7482" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ fontSize: '24px', color: '#1DA1F2' }}
        >
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        </a>
      </div>
    </>
  );
};

export default Contact;
