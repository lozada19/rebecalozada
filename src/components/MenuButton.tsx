import React from "react";

export type MenuButtonProp = {
  checked: boolean;
  onChecked: (isChecked: boolean) => void;
};

const MenuButton: React.FC<MenuButtonProp> = (props: MenuButtonProp) => {
  return (
    <div className="menuButton">
      <input
        type="checkbox"
        id="menu"
        onClick={() => props.onChecked(!props.checked)}
        checked={props.checked}
      />
      <label htmlFor="menu" className="menu ">
        <span id="line1" className="line"></span>
        <span id="line2" className="line"></span>
        <span id="line3" className="line"></span>
      </label>
    </div>
  );
};

export default MenuButton;
