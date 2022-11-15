import Card from "./Card";
import commuteImg from "../images/commute.png";
import recetaImg from "../images/compu.jpg"
import dogyImg from "../images/dogy-events.png";
import subirImg from "../images/subir-imag3.png";

function Proyectos() {
  return (
    <div id="my-project">
      <div className="container">
        <h2>Mis proyectos</h2>
        <div className="project">
          <Card
            title="Commute"
            name="Juego de obtaculos, tienes que esquivar los coches"
            action="https://rebloza.github.io/commute/"
            img={commuteImg}
          />

          <Card
            title="Tu receta"
            name="Es una app donde puedes crea recetas y comentar"
            action=""
            img={recetaImg}
          />

          <Card
            title="Dogy Events"
            name="Es una app donde puedes hacer evntos para tus perretes"
            action="https://dogy-events.netlify.app/"
            img={dogyImg}
          />

          <Card
            title="Subir imagen"
            name="Subir imagen"
            action=""
            img={subirImg}
          />

          

        </div>
      </div>
    </div>
  );
}

export default Proyectos;
