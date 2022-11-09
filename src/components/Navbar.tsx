import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="container">
     <p className="logo">RebLoza</p> 

        <nav>
          <a href="#Home">Inicio</a>
          <a href="#about-me">Sobre mi</a>
          <a href="#project">Proyectos</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
