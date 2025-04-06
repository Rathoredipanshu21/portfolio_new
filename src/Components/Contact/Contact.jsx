import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="enquiry-container">
      <header className="enquiry-header">
        {/* You can add a header image or title here */}
      </header>

      <div className="enquiry-content">
        <div className="enquiry-info">
          <h2>Get in Touch</h2>
          <p>
            We are here to assist you with any questions or concerns you may have.
            Please fill out the form and we will get back to you as soon as possible.
          </p>
          <p>You can also reach us through our social media channels:</p>

          <div className="social-media">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com/r.a.t.h.o.r.e21" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.linkedin.com/in/dipanshu-singh-3549672a8/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

          <aside className="enquiry-sidebar" style={{ marginTop: '75px' }}>
            <h2>Contact Information</h2>
            <p><FontAwesomeIcon icon={faPhone} /> +91-6201403690</p>
            <p><FontAwesomeIcon icon={faEnvelope} />rathoredipanshu21@gmail.com</p>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} />Dhanbad , Jharkhand</p>
          </aside>
        </div>

        <form className="enquiry-form">
          <h2>Contact Form</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="enquiry">Enquiry:</label>
            <textarea id="enquiry" name="enquiry" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
