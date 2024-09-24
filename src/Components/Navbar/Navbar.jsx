import React, { useState } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [active, setActive] = useState("home");

  const handleClick = (section) => {
    setActive(section);
    setIsMobile(false); // Close the mobile menu on click
  };

  return (
    <nav className="navbar">
      <h1 className="logo"><a href="/" style={{ textDecoration: 'none', color: '#fff' }}>DS.</a></h1>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li className={active === "home" ? "active" : ""}>
          <a href="/" onClick={() => handleClick("home")}>
            <FaHome /> Home
          </a>
        </li>
        <li className={active === "about" ? "active" : ""}>
          <a href="/travel" onClick={() => handleClick("about")}>
            <FaUser /> Travel Diary
          </a>
        </li>
        <li className={active === "projects" ? "active" : ""}>
          <a href="/projects" onClick={() => handleClick("projects")}>
            <FaProjectDiagram /> Projects
          </a>
        </li>
        <li className={active === "contact" ? "active" : ""}>
          <a href="/contact" onClick={() => handleClick("contact")}>
            <FaEnvelope /> Contact
          </a>
        </li>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
