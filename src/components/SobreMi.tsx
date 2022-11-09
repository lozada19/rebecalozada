import React from "react";
import background2 from "../images/aryan.jpg";
import logoIronhack from "../images/logo-ironhack.png";

function SobreMi() {
  return (
    <div id="about-me">
      <div className="container">
        <div className="img.container"></div>
        <h1>Sobre mi</h1>
        <p>
          Soy desarrolladora web recién graduada en Ironhack. Mi misión es
          encontrar un rol como Frontend o Fullstack que maximice mis
          oportunidades de crecimiento y desarrollo de habilidades a través del
          trabajo con un equipo excepcional.
        </p>
        <p>
          Realice un bootcamp intensivo de desarrollo Web de 9 semanas <br />{" "}
          Front end technologies : HTML | CSS | JavaScript(ES6) | React |
          Handlebars <br />
          Back end technologies : NodeJS | ExpressJS | MongoDB | Axios <br />{" "}
          Version Control : Git | GitHub9{" "}
        </p>
        <div className="img-conrainer "></div>
      </div>
    </div>
  );
}

export default SobreMi;
