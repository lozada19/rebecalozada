import { NavLink } from "react-router-dom";

function Navbar() {

  const scrollAnimado = (elemento: any) => {
    const destino = document.querySelector(elemento);
    destino.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <header>
      <div className="container">
        <p className="logo">RebLoza</p>

        <nav>
          <button onClick={ ()=> scrollAnimado("#Home")  }>Inicio</button>
          <button onClick={ ()=> scrollAnimado("#about-me")}>Sobre mi</button>
          <button onClick={ ()=> scrollAnimado("#my-studies")}>Estudios </button>
          <button onClick={ ()=> scrollAnimado("#my-project")}>Proyectos</button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
