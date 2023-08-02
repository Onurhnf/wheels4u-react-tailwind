import React from "react";
import {
  HiOutlineHome,
  HiOutlineCalendar,
  HiOutlineLogout,
} from "react-icons/hi";
import { GiCartwheel } from "react-icons/gi";

function Icon({ iconName, isActiveTab }) {
  const iconMap = {
    dashboard: HiOutlineHome,
    bookings: HiOutlineCalendar,
    vehicles: GiCartwheel,
    logout: HiOutlineLogout,
  };

  const base =
    "h-6 w-6 transition-all duration-300 group-hover:text-emerald-400 group-visited:text-gray-500 group-last:text-red-100 group-hover:group-last:text-red-400";
  const activeStyle = base + " text-emerald-400";
  const inactiveStyle = base + " text-gray-400";

  const IconComponent = iconMap[iconName];

  if (!IconComponent) {
    throw new Error("There is no icon with that name");
  }

  return (
    <IconComponent className={isActiveTab ? activeStyle : inactiveStyle} />
  );
}

export default Icon;
