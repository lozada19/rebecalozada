import React from "react";

import commuteImg from "../images/commute.png";
import dogyImg from "../images/dogy-events.png";
import subirImg from "../images/subir-imag3.png";

function Proyectos() {
  return (
    <div id="project">
      <div className="container">
        <h2>Mis proyectos</h2>
        <div className="project">
          <div className="carta">
            <h3>Commute</h3>
            <p>Juego de obtaculos, tienes que esquivar los coches</p>
            <form action="https://rebloza.github.io/commute/">
            <button>Ver</button>
            </form>
          </div>
          <div className="carta">
            <h3>Tu receta</h3>
            <p>Es una app donde puedes crea recetas y comentar</p>
            <form action="">
            <button>Ver</button>
            </form>
          </div>
          <div className="carta">
            <h3>Dogy Events</h3>
            <p>Es una app donde puedes hacer evntos para tus perretes</p>
            <form action="https://dogy-events.netlify.app/">
            <button>Ver</button>
            </form>
          </div>
          <div className="carta">
            <h3>Subir imagen</h3>
            <p>subir images de forma rapida</p>
            <form action="">
            <button>Ver</button>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Proyectos;
