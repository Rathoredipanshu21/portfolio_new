import React from 'react';
import './TechSkill.css';
import { FaPhp, FaJs, FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const TechSkills = () => {
    return (
        <div className="skills-section">
            <h2 style={{color:'#fff'}}>Professional Skillset</h2>
            <div className="skills-grid">
                <div className="skill-item" data-aos="flip-left">
                    <FaJs size={70} /> {/* JavaScript Icon */}
                </div>
                <div className="skill-item" data-aos="flip-up">
                    <FaReact size={70} /> {/* React.js Icon */}
                </div>
                <div className="skill-item" data-aos="zoom-in">
                    <FaNodeJs size={70} /> {/* Node.js Icon */}
                </div>
                <div className="skill-item" data-aos="zoom-in-down">
                    <FaPhp size={70} /> {/* PHP Icon */}
                </div>
                <div className="skill-item" data-aos="flip-left">
                    <FaDatabase size={70} /> {/* Database Icon */}
                </div>
                <div className="skill-item" data-aos="flip-up">
                    <FaBootstrap size={70} /> {/* Bootstrap Icon */}
                </div>
                <div className="skill-item" data-aos="zoom-in">
                    <FaGithub size={70} /> {/* GitHub Icon */}
                </div>
                <div className="skill-item" data-aos="zoom-in-down">
                    <SiExpress size={70} /> {/* Express.js Icon */}
                </div>
                <div className="skill-item" data-aos="flip-left">
                    <SiMongodb size={70} /> {/* MongoDB Icon */}
                </div>
                <div className="skill-item" data-aos="flip-up">
                    <FaJava size={70} /> {/* Java Icon */}
                </div>
                <div className="skill-item" data-aos="zoom-in">
                    <FaHtml5 size={70} /> {/* HTML5 Icon */}
                </div>
                <div className="skill-item" data-aos="zoom-in-down">
                    <FaCss3Alt size={70} /> {/* CSS3 Icon */}
                </div>
            </div>
        </div>
    );
};

export default TechSkills;
