import React from "react";

import linkedinLogo from "../images/icon-linkedin.png";
import githubLogo from "../images/icon-github.png";


function Home() {
  return (
    <div id="Home" className="hero">
    
      <div className="container">
        <h1>Rebeca Lozada</h1>
        <h5>Desarrolladora Full Stack Junior. </h5>

        <div>
          <a href="https://www.linkedin.com/in/yuleisys-rebeca-lozada-ortega/">
            <img src={linkedinLogo} alt="icom" />
          </a>

          <a href="https://github.com/lozada19?tab=repositories">
            <img src={githubLogo} alt="icons" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
