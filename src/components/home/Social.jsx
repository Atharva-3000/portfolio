import React from "react";
import "./social.css";
const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.linkedin.com/in/atharva-deshmukh-b0479522a/" className="home__social-icon" target="_blank">
      <i class='bx bxl-linkedin' ></i>
      </a>

      <a href="https://twitter.com/Powxu_XD" className="home__social-icon" target="_blank">
        <i class="uil uil-twitter"></i>
      </a>

      <a href="https://github.com/Atharva-3000" className="home__social-icon" target="_blank">
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
