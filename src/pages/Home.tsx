import React from "react";
import image1 from "../images/playa-2.jpg";
import linkedinLogo from "../images/icons8-linkedin.png";
import githubLogo from "../images/icons-github.png";
import SobreMi from "../components/SobreMi";
import Proyectos from "../components/Proyectos";

function Home() {
  return (
    <div className="home">
      <div className="home1">
        <img className="image1" src={image1} alt="playa" />
      </div>

      <div className="imformation">
        <h1 className="title-home">Yuleisys R Lozada O</h1>
        <h5 className="text-home">Desarrolladora Full Stack Junior. </h5>

        <div className="icons-home">
          <a href="https://www.linkedin.com/in/yuleisys-rebeca-lozada-ortega/">
            <img className="icons-linkedin" src={linkedinLogo} alt="icom" />
          </a>

          <a href="https://github.com/lozada19/rebecalozada.app">
            <img className="icons-github" src={githubLogo} alt="icons" />
          </a>
        </div>
      </div>
      <SobreMi/>
      <Proyectos/>

    </div>
  );
}

export default Home;
