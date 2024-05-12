// Projects.jsx
import React from "react";
import { FaGithub } from "react-icons/fa6";
import "../Projects.css";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h1 className="title">PROJECTS</h1>
      <div className="project-items">
        {/* Project 1 */}
        <div className="project-item">
          <a href="https://github.com/Shushant-Priyadarshi/Project1" target="_blank" rel="noopener noreferrer">
            <div className="project-card">
              <h2>Project 1</h2>
              <p>Description of Project 1</p>
              <h2>Technology Stack</h2>
              <FaGithub className="github-icon" />
            </div>
          </a>
        </div>
        {/* Project 2 */}
        <div className="project-item">
          <a href="https://github.com/Shushant-Priyadarshi/Project2" target="_blank" rel="noopener noreferrer">
            <div className="project-card">
              <h2>Project 2</h2>
              <p>Description of Project 2</p>
              <h2>Technology Stack</h2>
              <FaGithub className="github-icon" />
            </div>
          </a>
        </div>
        {/* Project 3 */}
        <div className="project-item">
          <a href="https://github.com/Shushant-Priyadarshi/Project3" target="_blank" rel="noopener noreferrer">
            <div className="project-card">
              <h2>Project 3</h2>
              <p>Description of Project 3</p>
              <h2>Technology Stack</h2>
              <FaGithub className="github-icon" />
            </div>
          </a>
        </div>
        {/* Add more project items here */}
      </div>
    </div>
  );
};

export default Projects;
