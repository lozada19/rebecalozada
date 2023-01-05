import { NavLink } from "react-router-dom";
import { useState } from "react";
import Icon from "../images/burger-menu.png";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const scrollAnimado = (elemento: any) => {
    closeMenu();
    const destino = document.querySelector(elemento);
    destino.scrollIntoView({
      behavior: "smooth",
    });
  };

  window.addEventListener(
    "resize",
    () => {
      setIsMobile(window.innerWidth < 850);
    },
    false
  );

  let navStyle: string;
  if (!isMobile) {
    navStyle = "menuLarge";
  } else if (navbarOpen) {
    navStyle = "showMenu";
  } else {
    navStyle = "hideMenu";
  }

  return (
    <header>
      <div className="menu-navbar">
        <div className="navbar-logo">
          {/*<img className="botton-burger" onClick={handleToggle} src={Icon}/>*/}

          <input type="checkbox" id="menu" onClick={handleToggle} />
          <label htmlFor="menu" className="menu ">
            <span id="line1" className="line"></span>
            <span id="line2" className="line"></span>
            <span id="line3" className="line"></span>
          </label>

          <div className="logo2" />
          <p className="logo">RebLoza</p>
        </div>

        <ul className={navStyle}>
          <button className="button-nav" onClick={() => scrollAnimado("#Home")}>
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
