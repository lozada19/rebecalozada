import React from "react";

import commuteImg from "../images/commute.png";
import dogyImg from "../images/dogy-events.png";
import subirImg from "../images/subir-imag3.png"

function Proyectos() {
  return (
    <div className="container-project">
      <h2 className="title-project">Mis proyectos</h2>

      <div className="image-project">
        <a href="https://rebloza.github.io/commute/">
          <img className="images" src={commuteImg} alt="commute" width={80} />
          <h5 className="name-project">Commute</h5>
        </a>
        <a href="https://dogy-events.netlify.app/">
          <img className="images" src={dogyImg} alt="dogy" width={80}  />
          <h5 className="name-project">Dogy Events</h5>
        </a>

      </div>
      <h2 className="title-project">En equipo</h2>
      <div className="image-project">
        
        <a href="">
          <img  width={80} />
          <h5>Tu receta</h5>
        </a>

      </div>
      <h2 className="title-project">En desarrollo</h2>
      <div className="image-project">
      
        <a href="">
          <img  className="images" src={subirImg} alt="" width={80}/>
          <h5 className="name-project">Subir imagen </h5>
        </a>

      </div>
    </div>
  );
}

export default Proyectos;
