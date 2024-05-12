// Experience.jsx
import React from "react";
import "../Experience.css";

function Experience() {
  return (
    <div className="experience-container" id="exp">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-items">
        <div className="experience-item">
          <h3>Software Engineer Intern</h3>
          <p>
          Worked as a Software Engineer Intern at a leading tech company, contributing to various frontend projects using modern technologies such as React.js, HTML, and CSS.
            <br />
            <i>May 2023 - August 2023</i>
          </p>
        </div>
        <div className="experience-item">
          <h3>Web Development Volunteer</h3>
          <p>
          Volunteered for web development projects, collaborating with a team to create responsive and user-friendly web applications using JavaScript frameworks and libraries.
            <br />
            <i>September 2022 - December 2022</i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
