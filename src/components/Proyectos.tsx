import React from "react";

import commuteImg from "../images/commute.png";
import dogyImg from "../images/dogy-events.png";
import subirImg from "../images/subir-imag3.png";

function Proyectos() {
  return (
    <ul id="scrollspyHeading3" className="cards">
      <li className="card">
        <a href="https://rebloza.github.io/commute/" className="card">
          <img className="card__image" src={commuteImg} alt="commute" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" >
                <path />
              </svg>
              <div className="card__header-text">
                <h3 className="card__title"> Commute</h3>
              </div>
            </div>
            <p className="card__description">
              Juego de obtaculos, tienes que esquivar los coches
            </p>
          </div>
        </a>
      </li>

      <li className="card">
        <a href="https://dogy-events.netlify.app/">
          <img className="card__image" src={dogyImg} alt="dogy" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" >
                <path />
              </svg>
              <div className="card__header-text">
                <h3 className="card__title"> Dogy Events</h3>
              </div>
            </div>
            <p className="card__description">
              Es una app donde puedes hacer evntos para tus perretes
            </p>
          </div>
        </a>
      </li>

      <li className="card">
        <a href="" className="card">
          <img className="card__image" alt="dogy" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" >
                <path />
              </svg>
              <div className="card__header-text">
                <h3 className="card__title"> Tu receta</h3>
              </div>
            </div>
            <p className="card__description">
              Es una app donde puedes crea recetas y comentar{" "}
            </p>
          </div>
        </a>
      </li>

      <li className="card">
        <a href="" className="card">
          <img className="card__image" src={subirImg} alt="logo" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" >
                <path />
              </svg>
              <div className="card__header-text">
                <h3 className="card__title"> Subir imagen</h3>
              </div>
            </div>
            <p className="card__description">
              Es una app donde puedes hacer evntos para tus perretes
            </p>
          </div>
        </a>
      </li>
    </ul>
  );
}

export default Proyectos;
