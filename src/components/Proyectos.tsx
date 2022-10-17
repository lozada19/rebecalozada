import React from "react";

import commuteImg from "../images/commute.png";
import dogyImg from "../images/dogy-events.png";

function Proyectos() {
  return (
    <div className="container-project">
      <h2>mis proyectos</h2>

      <div className="image-project">
        <a href="https://rebloza.github.io/commute/">
          <img className="images" src={commuteImg} alt="commute" width={80} />
        </a>
        <a href="https://dogy-events.netlify.app/">
          <img className="images" src={dogyImg} alt="dogy" width={80} />
        </a>
      </div>
    </div>
  );
}

export default Proyectos;
