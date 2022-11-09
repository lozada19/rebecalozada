import React from "react";
import image1 from "../images/playa-2.jpg";
import imgHome from "../images/image-home.jpg"
import linkedinLogo from "../images/icons8-linkedin.png";
import githubLogo from "../images/icons-github.png";
import SobreMi from "../components/SobreMi";
import Proyectos from "../components/Proyectos";

function Home() {
  return (
    <div id="Home" className="hero">
    
      <div className="container">
        <h1>Yuleisys Lozada</h1>
        <h5>Desarrolladora Full Stack Junior. </h5>

        <div>
          <a href="https://www.linkedin.com/in/yuleisys-rebeca-lozada-ortega/">
            <img src={linkedinLogo} alt="icom" />
          </a>

          <a href="https://github.com/lozada19/rebecalozada.app">
            <img src={githubLogo} alt="icons" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
