import React from "react";
import {
  HiOutlineHome,
  HiOutlineCalendar,
  HiOutlineLogout,
} from "react-icons/hi";

function Icon({ iconName }) {
  let style =
    "h-8 w-8 text-gray-500  transition-all duration-300 group-hover:text-stone-700 group-active:text-gray-900 group-visited:text-gray-500";
  switch (iconName) {
    case "dashboard":
      return <HiOutlineHome className={style} />;

    case "bookings":
      return <HiOutlineCalendar className={style} />;

    case "logout":
      return <HiOutlineLogout className={style} />;

    default:
      throw Error("There is no icon with that name");
  }
}

export default Icon;
