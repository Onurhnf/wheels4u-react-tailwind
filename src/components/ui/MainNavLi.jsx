import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon.jsx";

function MainNavLi({ to, isSidebarOpen }) {
  const location = useLocation();
  const [isActiveTab, setIsActiveTab] = useState(false);

  const base =
    "flex items-center gap-5 overflow-hidden  pr-14 pl-6 py-3 font-medium text-gray-700 rounded-xl md:rounded-sm hover:bg-gray-50 hover:text-gray-800 ";

  const style = {
    active: base + " bg-stone-100",
    inActive: base + "",
  };

  useEffect(() => {
    setIsActiveTab(location.pathname === `/${to}`);
  }, [location.pathname, to]);

  return (
    <li className="group first:mt-2 last:absolute  last:bottom-8 ">
      <NavLink
        end
        to={`/${to}`}
        className={({ isActive }) => {
          return isActive
            ? isSidebarOpen
              ? style["active"]
              : style["inActive"]
            : style["inActive"];
        }}
      >
        {isSidebarOpen && (
          <>
            <Icon
              iconName={to === "wheels" ? "vehicles" : to}
              isActiveTab={isActiveTab}
            />

            <span className="text-base capitalize transition-all duration-300">
              {to}
            </span>
          </>
        )}
      </NavLink>
    </li>
  );
}

export default MainNavLi;
