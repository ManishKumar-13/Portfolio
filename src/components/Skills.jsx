import React from "react";
import skillData from "../Skills/skills.json";
import skill from "../images/skill.gif";
import { Button } from "@mui/material";
import "../Skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-content">
        <div className="skills-left">
          <h1 className="title">TECH STACK</h1>
          <div className="skill-buttons">
            {skillData.map((skill) => (
              <button
                key={skill.id}
                variant="contained"
                className="skill-button"
                
              >
                {skill.skill}
              </button>
            ))}
          </div>
        </div>
        <div className="skills-right">
          <img src={skill} alt="skill" className="skill-image" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
