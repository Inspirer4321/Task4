import React, { useRef } from "react";
import "./menu.css"

const MenuItem = () => {
const [selected, setSelected] = React.useState("Bacon");
const menuRef = React.useRef(null);
const [isOpen, setIsOpen] = React.useState(false);
const menuItems = ["Bacon", "Tuna", "Tuna pants"];
const handleMenuItemClick = (item) =>{
  setSelected(item);
}  
const handleOpenMenuClick = () => {
  setIsOpen(!isOpen);
}
return (
  <div>
  <div className="select">Selected: {selected}</div>
  <button onClick={handleOpenMenuClick} className="open-menu-btn">
    Open Menu
  </button>
      {isOpen && (
        <div ref={menuRef} className="menu-container">
          {menuItems.map((item) => (
            <div
              key={item}
              className={`menu-item ${selected === item ? "active" : ""}`}
              onClick={() => handleMenuItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
