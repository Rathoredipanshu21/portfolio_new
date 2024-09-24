import React from 'react';
import './TechSkill.css';
import { FaPhp, FaJs, FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaBootstrap, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const TechSkills = () => {
    return (
        <div className="skills-section">
            <h2 style={{color:'#fff'}}>Professional Skillset</h2>
            <div className="skills-grid">
                <div className="skill-item">
                    <FaJs size={70} /> {/* JavaScript Icon */}
                </div>
                <div className="skill-item">
                    <FaReact size={70} /> {/* React.js Icon */}
                </div>
                <div className="skill-item">
                    <FaNodeJs size={70} /> {/* Node.js Icon */}
                </div>
                <div className="skill-item">
                    <FaPhp size={70} /> {/* PHP Icon */}
                </div>
                <div className="skill-item">
                    <FaDatabase size={70} /> {/* Database Icon */}
                </div>
                <div className="skill-item">
                    <FaBootstrap size={70} /> {/* Bootstrap Icon */}
                </div>
                <div className="skill-item">
                    <FaGithub size={70} /> {/* GitHub Icon */}
                </div>
                <div className="skill-item">
                    <SiExpress size={70} /> {/* Express.js Icon */}
                </div>
                <div className="skill-item">
                    <SiMongodb size={70} /> {/* MongoDB Icon */}
                </div>
                <div className="skill-item">
                    <FaJava size={70} /> {/* Java Icon */}
                </div>
                <div className="skill-item">
                    <FaHtml5 size={70} /> {/* HTML5 Icon */}
                </div>
                <div className="skill-item">
                    <FaCss3Alt size={70} /> {/* CSS3 Icon */}
                </div>
            </div>
        </div>
    );
};

export default TechSkills;
