import React from "react";

type MenuItem = {
  title: string;
  id: string;
};

const menuItems: MenuItem[] = [
  { id: "#Home", title: "Inicio" },
  { id: "#about-me", title: "Sobre mi" },
  { id: "#studies", title: "Estudios" },
  { id: "#project", title: "Proyectos" },
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
      {menuItems.map(item => (
        <div>
          <button className="menuList-button-nav" onClick={() => scrollAnimado(item.id)}>
            {item.title}
          </button>
          <hr className="menuList-solid" />
        </div>
      ))}
    </ul>
  );
};

export default MenuList;
