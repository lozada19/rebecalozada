import React from "react";
import image1 from "../images/playa-2.jpg";
import linkedinLogo from "../images/icons8-linkedin.png"
import githubLogo from "../images/icons-github.png"

function Home() {
  return (
    <div className="home">
      <div className="home1">
      <img className="image1" src={image1} alt="playa" />
      </div>
     
      <div className="imformation">
        <h1 className="title-home">Yuleisys R Lozada O</h1>
        <h5 className="text-home">Desarrolladora Full Stack Junior.  </h5>
        <div className="icons-home" >
        <img className="icons-linkedin" src={linkedinLogo } alt="icom" />
        <img className="icons-github" src={githubLogo} alt="icons" />

        </div>
       
      </div>
    </div>
  );
}

export default Home;
