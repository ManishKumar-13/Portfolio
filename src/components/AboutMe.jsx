// AboutMe.jsx
import React from "react";
import gifCode from "../images/gifCode.gif";
import "../AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <div className="about-image">
          <img src={gifCode} alt="coder" className="code-gif" />
        </div>
        <div className="about-text">
          <p>
            I am a 24-year-old{" "}
            <span className="highlight">Full Stack Developer</span> based in
            India, currently working as a Solution Engineer at{" "}
            <span className="highlight">LabVantage Solutions</span>. With
            a strong passion for technology and problem-solving, I enjoy
            creating innovative solutions and exploring the endless
            possibilities of software development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
