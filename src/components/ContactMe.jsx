// ContactMe.jsx
import React from "react";
import { FaRegCopyright, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "../ContactMe.css";

function ContactMe() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <div className="contact-info">
          <FaRegCopyright />
          <span>2024 Manish</span>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/manish-kumar-72a681289/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://github.com/ManishKumar-13" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
