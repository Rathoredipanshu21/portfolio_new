import React from 'react';
import './AboutMe.css'; // Link to the CSS file
import { FaReact, FaNodeJs, FaPhp, FaJs, FaCode, FaUsers, FaBrain, FaClipboardList } from 'react-icons/fa'; // Importing icons

const AboutMe = () => {
  return (
    <div className="aboutMe-container" data-aos="fade-up">
      <div className="title-container" data-aos="zoom-in-right">
        <h1 className="aboutMe-title">
          LET ME <span style={{color:'yellow'}}>INTRODUCE</span> MYSELF
        </h1>
        <span className="styled-br"></span> {/* Adding the styled line */}
      </div>
      <div className="aboutMe-content" data-aos="zoom-out-up">
        <div className="aboutMe-text">
          <p>
            I am a passionate developer with a strong foundation in web and software development.
            I have successfully created and managed various projects, leveraging technologies such as 
            <span className="icon-highlight"><FaReact className="icon react" /> React</span>,
            <span className="icon-highlight"><FaJs className="icon js" /> JavaScript</span>, 
            <span className="icon-highlight"><FaPhp className="icon php" /> PHP</span>, 
            and <span className="icon-highlight"><FaNodeJs className="icon node" /> Node.js</span>.
          </p>
          <p>My objective is to continuously enhance my skills and contribute to innovative projects that solve real-world problems.</p>
        </div>

        <div className="aboutMe-strengths" data-aos="zoom-out-right">
          <h3>My key strengths include:</h3>
          <ul>
            <li data-aos="flip-left"><FaBrain className="icon bullet" /> Problem-Solving: Adept at identifying challenges and developing effective solutions.</li>
            <li data-aos="flip-up"><FaUsers className="icon bullet" /> Collaboration: Experience working in team environments to deliver high-quality results.</li>
            <li data-aos="zoom-in"><FaCode className="icon bullet" /> Adaptability: Quick to learn new technologies and frameworks to meet project needs.</li>
            <li data-aos="zoom-in-down"><FaClipboardList className="icon bullet" /> Attention to Detail: Committed to writing clean, efficient code that adheres to best practices.</li>
            <li data-aos="flip-left"><FaCode className="icon bullet" /> User-Centric Design: Focused on creating intuitive and engaging user experiences.</li>
          </ul>
        </div>

        <div className="aboutMe-excitement">
          <p>I am excited to connect and explore opportunities where I can apply my skills and contribute to dynamic teams.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
