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
    navStyle = "navbar-menuLarge";
  } else if (navbarOpen) {
    navStyle = "navbar-showMenu";
  } else {
    navStyle = "navbar-hideMenu";
  }

  return (
    <header>
      <div className="navbar-menu">
        <div className="navbar-container">
          {isMobile ? (
            <MenuButton checked={navbarOpen} onChecked={handleToggle} />
          ) : null}

          <div className="navbar-space" />
          <p className="navbar-logo">RebLoza</p>
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
