import { NavLink } from "react-router-dom";
import { useState } from "react";
import Icon from "../images/burger-menu.png";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const scrollAnimado = (elemento: any) => {
    closeMenu()
    const destino = document.querySelector(elemento);
    destino.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header>
      <div className="menu-navbar">
        <div className="navbar-logo">
          <img className="botton-burger" onClick={handleToggle} src={Icon}/>

          <div className="logo2" />
          <p className="logo">RebLoza</p>
        </div>
        

        <ul className={`${navbarOpen ? "showMenu" : "hideMenu"}`}>
          <button className="button-nav" onClick={() => scrollAnimado("#Home")} >
            Inicio
          </button>
          <hr className="solid" />
          <button
            className="button-nav"
            onClick={() => scrollAnimado("#about-me")}
          >
            Sobre mi
          </button>
          <hr className="solid" />
          <button
            className="button-nav"
            onClick={() => scrollAnimado("#my-studies")}
          >
            Estudios{" "}
          </button>
          <hr className="solid" />
          <button
            className="button-nav"
            onClick={() => scrollAnimado("#my-project")}
          >
            Proyectos
          </button>
          <hr className="solid" />
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
