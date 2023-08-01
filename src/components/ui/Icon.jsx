import React from "react";
import {
  HiOutlineHome,
  HiOutlineCalendar,
  HiOutlineLogout,
} from "react-icons/hi";

import { GiCartwheel } from "react-icons/gi";

function Icon({ iconName, isActiveTab }) {
  console.log(iconName, isActiveTab);

  const base =
    "h-6 w-6 transition-all duration-300 group-hover:text-emerald-400  group-visited:text-gray-500 group-last:text-red-100 group-hover:group-last:text-red-400";

  const style = {
    active: base + " text-emerald-400 ",
    inActive: base + " text-gray-400 ",
  };
  switch (iconName) {
    case "dashboard":
      return (
        <HiOutlineHome
          className={isActiveTab ? style["active"] : style["inActive"]}
        />
      );

    case "bookings":
      return (
        <HiOutlineCalendar
          className={isActiveTab ? style["active"] : style["inActive"]}
        />
      );

    case "vehicles":
      return (
        <GiCartwheel
          className={isActiveTab ? style["active"] : style["inActive"]}
        />
      );

    case "logout":
      return (
        <HiOutlineLogout
          className={isActiveTab ? style["active"] : style["inActive"]}
        />
      );

    default:
      throw Error("There is no icon with that name");
  }
}

export default Icon;
