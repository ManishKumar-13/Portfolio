// Banner.jsx
import React from "react";
import { ReactTyped } from "react-typed";
import "../Banner.css";

const Banner = () => {
  return (
    <div className="banner-container" id="home">
      <div className="banner-content">
        <div className="banner-text">
          <div className="banner-title">Hello.&nbsp;&nbsp;I'm Manish</div>
          <div className="banner-subtitle">
            <ReactTyped
              className="typing-text"
              strings={["A Frontend Developer"]}
              typeSpeed={100}
              backSpeed={60}
              loop={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
