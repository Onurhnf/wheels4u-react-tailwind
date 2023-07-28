import React from "react";

import { NavLink } from "react-router-dom";
import Icon from "./Icon.jsx";

function MainNavLi({ to, isSidebarOpen }) {
  const base =
    "flex items-center gap-5 overflow-hidden md:px-9 px-2 py-2 text-2xl  font-medium text-gray-700 rounded-xl md:rounded-sm hover:bg-gray-200 hover:text-gray-800";

  const style = {
    active: base + " bg-gray-300",
    inActive: base + "",
  };

  return (
    <li className="group justify-end first:mt-2 last:absolute last:bottom-8 ">
      <NavLink
        end
        to={`/${to}`}
        className={({ isActive }) =>
          isActive
            ? isSidebarOpen
              ? style["active"]
              : style["inActive"]
            : style["inActive"]
        }
      >
        {isSidebarOpen && (
          <>
            <Icon iconName={to === "wheels" ? "vehicles" : to} />

            <span className="capitalize transition-all duration-300">{to}</span>
          </>
        )}
      </NavLink>
    </li>
  );
}

export default MainNavLi;
