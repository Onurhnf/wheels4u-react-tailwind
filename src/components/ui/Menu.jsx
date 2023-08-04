import React, { createContext, useContext, useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../../hooks/useOutsideClick.js";
import { createPortal } from "react-dom";

const StyledList = (props) => {
  const style = {
    right: `${props.position.x}px`,
    top: `${props.position.y}px`,
  };
  const classes = `fixed bg-gray-50 shadow-md border border-emerald-100 shadow-emerald-100`;

  return (
    <ul ref={props.refTo} style={style} className={classes}>
      {props.children}
    </ul>
  );
};

const MenuContext = createContext();

function Menu({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;
  return (
    <MenuContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenuContext.Provider>
  );
}
function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenuContext);

  function handleClick(e) {
    e.stopPropagation();

    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <button
      className="translate-x-3 rounded-sm border-none bg-none p-1 hover:bg-gray-100"
      onClick={handleClick}
    >
      <HiEllipsisVertical className="h-6 w-6 text-emerald-600" />
    </button>
  );
}
function List({ id, children }) {
  const { openId, position, close } = useContext(MenuContext);
  const ref = useOutsideClick(close, false);

  if (openId !== id) return null;

  return createPortal(
    <StyledList position={position} refTo={ref}>
      {children}
    </StyledList>,
    document.body,
  );
}
function Button({ children, icon, onClick }) {
  const { close } = useContext(MenuContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li className="border-b  border-b-gray-100 last:border-none">
      <button
        className=" flex w-full items-center gap-6  bg-white px-5 py-3 text-left transition-all duration-200  hover:bg-gray-50"
        onClick={handleClick}
      >
        {icon}
        <span>{children}</span>
      </button>
    </li>
  );
}

Menu.Toggle = Toggle;
Menu.List = List;
Menu.Button = Button;

export default Menu;
