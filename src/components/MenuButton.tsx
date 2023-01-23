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
      <label htmlFor="menu" className="menu-burger">
        <span id="line1" className="menu-line-burger"></span>
        <span id="line2" className="menu-line-burger"></span>
        <span id="line3" className="menu-line-burger"></span>
      </label>
    </div>
  );
};

export default MenuButton;
