import React from 'react';
import './Academic.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Academic = () => {
  

    return (
        <div className="aboutMe">
            <div className="aboutMe-left" data-aos="zoom-in-right">
               
                
                <div className="section">
                    <h2 className="title" style={{textAlign:'center'}}>  <span style={{ color: 'yellow' }}>Academic </span>Qualifications</h2>

                    {/* <div className="custom-break"></div>  */}


                    <h3 className='left-content' data-aos="zoom-out-up">
                        <span className="icon-text">
                            <FontAwesomeIcon icon={faStar} className="star-icon" />
                            <span>🎓 Currently pursuing an MSc in Computer Science from BBMKU University, Dhanbad, Jharkhand (2023-2025).</span>
                        </span>
                    </h3>
                    <h3 className='left-content' data-aos="zoom-out-right">
                        <span className="icon-text">
                            <FontAwesomeIcon icon={faStar} className="star-icon" />
                            <span>🏆 Completed my Bachelor's degree with a CGPA of 6.86 from PK Roy Memorial College, Dhanbad in 2023.</span>
                        </span>
                    </h3>
                    <h3 className='left-content'>
                        <span className="icon-text">
                            <FontAwesomeIcon icon={faStar} className="star-icon" />
                            <span>📚 Finished my Intermediate at Ganpat Rai Salarpuria Saraswati Vidya Mandir, Bhagalpur with 62.5% in 2020.</span>
                        </span>
                    </h3>
                    <h3 className='left-content'>
                        <span className="icon-text">
                            <FontAwesomeIcon icon={faStar} className="star-icon" />
                            <span>🌟 Matriculated from Chaman Sah Saraswati Vidya Mandir, Banka in 2017 with an impressive 8.6 CGPA.</span>
                        </span>
                    </h3>
                </div>

                <div className="section" data-aos="flip-left">
                    <h2 className="title" style={{textAlign:'center'}}>S<span style={{color:'yellow'}}>ki</span>lls</h2>
                    <h3 className='left-content' data-aos="flip-left">
                        <span className="icon-text">
                            <FontAwesomeIcon icon={faStar} className="star-icon" />
                            <span>🚀 Knowledge of Programming Languages : <strong>PHP, JavaScript, Java</strong></span>
                        </span>
                    </h3>
                    <h3 className='left-content' data-aos="flip-up">
                        <span className="icon-text">
                            <FontAwesomeIcon icon={faStar} className="star-icon" />
                            <span>🌐 Proficient in Frontend Technologies : <strong>HTML, CSS, JavaScript, React.js, React Native, Bootstrap</strong></span>
                        </span>
                    </h3>
                    <h3 className='left-content' data-aos="zoom-in">
                        <span className="icon-text">
                            <FontAwesomeIcon icon={faStar} className="star-icon" />
                            <span>🔙 Backend Development Skills : <strong>PHP, Node.js, Express.js</strong></span>
                        </span>
                    </h3>
                    <h3 className='left-content' data-aos="zoom-in-down">
                        <span className="icon-text">
                            <FontAwesomeIcon icon={faStar} className="star-icon" />
                            <span>💾 Database Management Expertise : <strong>MySQL, MongoDB</strong></span>
                        </span>
                    </h3>
                    <h3 className='left-content' data-aos="flip-left">
                        <span className="icon-text">
                            <FontAwesomeIcon icon={faStar} className="star-icon" />
                            <span>🛠️ Tools & Other Technologies : <strong>GitHub, MS Office, GSAP ScrollTrigger, Locomotive</strong></span>
                        </span>
                    </h3>
                </div>
            </div>

            {/* <div className="contact-section">
                <h2 className="contact-title">FEEL FREE TO <span style={{ color: 'yellow' }}>REACH</span> US ON</h2>
                <div className="social-icons">
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
            </div> */}
        </div>
    );
};

export default Academic;
