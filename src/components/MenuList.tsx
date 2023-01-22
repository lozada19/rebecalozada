import React from "react";

type MenuItem = {
  title: string;
  id: string;
};

const menuItems: MenuItem[] = [
  { id: "#Home", title: "Inicio" },
  { id: "#about-me", title: "Sobre mi" },
  { id: "#my-studies", title: "Estudios" },
  { id: "#my-project", title: "Proyectos" },
];

export type MenuListProp = {
  className?: string;
  onScroll: () => void;
};

const MenuList: React.FC<MenuListProp> = (props: MenuListProp) => {
  const scrollAnimado = (elemento: any) => {
    props.onScroll();
    const destino = document.querySelector(elemento);
    destino.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ul className={props.className}>
      {menuItems.map((item) => (
        <div>
          <button className="button-nav" onClick={() => scrollAnimado(item.id)}>
            {item.title}
          </button>
          <hr className="solid" />
        </div>
      ))}
    </ul>
  );
};

export default MenuList;
