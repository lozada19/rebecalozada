import Card from "./Card";
import commuteImg from "../images/commute2.png";
import recetaImg from "../images/tu-receta-foto.png"
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
            action="https://lozada19.github.io/commute/"
            img={commuteImg}
          />
          <Card
            title="Tu receta"
            name="Es una app donde puedes crea recetas y comentar"
            action="https://github.com/lozada19/tu-receta"
            img={recetaImg}
          />

          <Card
            title="Dogy Events"
            name="Es una app donde puedes hacer evntos para tus perretes"
            action="https://github.com/lozada19/dogy-events-client"
            img={dogyImg}
          />

          <Card
            title="image uploader"
            name="image uploader"
            action="https://github.com/lozada19/image-uploader"
            img={subirImg}
          />

          

        </div>
      </div>
    </div>
  );
}

export default Proyectos;
