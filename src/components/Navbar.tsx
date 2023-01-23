import { useState } from "react";
import MenuButton from "./MenuButton";
import MenuList from "./MenuList";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  windowEvent("resize", setIsMobile);
  windowEvent("load", setIsMobile);

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
          {isMobile ? (
            <MenuButton checked={navbarOpen} onChecked={handleToggle} />
          ) : null}

          <div className="logo2" />
          <p className="logo">RebLoza</p>
        </div>

        <MenuList className={navStyle} onScroll={closeMenu} />
      </div>
    </header>
  );
};

const windowEvent = (
  event: string,
  setIsMobile: (isMobile: boolean) => void
) => {
  window.addEventListener(
    event,
    () => setIsMobile(window.innerWidth < 850),
    false
  );
};

export default Navbar;
