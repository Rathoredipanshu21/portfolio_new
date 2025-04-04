import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";
import pp from "../Assets/profile_pic.jpg";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import samplePDF from '../Assets/Dip_res_updated.pdf';

const titles = [
  "Full Stack Developer",
  "MERN Developer",
  "Frontend Developer",
  "Backend Developer",
  "PHP Developer",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change title every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      
      <div className="hero-content" data-aos="fade-right">
        <h1>Hello there....</h1>
        <h2>
          Welcome to the Portfolio of <span className="highlighted"><span style={{color:'yellow'}}>DIPANSHU SINGH</span></span>
        </h2>
        <h3>
          <div className="custom-break"></div>
          <span className="dynamic-title">
            <FontAwesomeIcon icon={faArrowRight} size="1x" className="arrow-icon" />
            {titles[index]}
          </span>
        </h3>
        <div className="custom-break"></div>
        <p>
          As a dedicated and results-driven web developer, I specialize in building scalable, high-performance web applications that enhance user experience. With a strong focus on clean, efficient code and a passion for innovation, I aim to deliver solutions that not only meet business objectives but also push the boundaries of web development.
        </p>

        <br />
        <br />

        <div className="social-icons" data-aos="zoom-in">
          <a href="https://github.com/Rathoredipanshu21" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/dipanshu-rathore-3549672a8/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
          <a href="https://www.instagram.com/r.a.t.h.o.r.e21/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="https://www.facebook.com/dipanshu.rathore.589/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
          <a href="https://x.com/rathore7482" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </a>
        </div>

        <div className="resume-container" style={{ marginTop: '20px' }} data-aos="fade-up">
          <a href={samplePDF} download="My_Resume.pdf">
            <button
              style={{
                backgroundColor: 'yellow',
                color: 'black',
                padding: '10px 20px',
                fontSize: '1em',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Download CV
            </button>
          </a>
        </div>
      </div>
      
      <div className="hero-image" data-aos="fade-left">
        <img src={pp} alt="Dipanshu Singh" />
      </div>
    </section>
  );
};

export default Hero;
