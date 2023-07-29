import React from "react";
import {
  HiOutlineHome,
  HiOutlineCalendar,
  HiOutlineLogout,
} from "react-icons/hi";

import { GiCartwheel } from "react-icons/gi";

function Icon({ iconName }) {
  let style =
    "h-8 w-8 text-emerald-600  transition-all duration-300 group-hover:text-emerald-500 group-active:text-gray-900 group-visited:text-gray-500 group-last:text-red-500 group-hover:group-last:text-red-400";

  switch (iconName) {
    case "dashboard":
      return <HiOutlineHome className={style} />;

    case "bookings":
      return <HiOutlineCalendar className={style} />;

    case "vehicles":
      return <GiCartwheel className={style} />;

    case "logout":
      return <HiOutlineLogout className={style} />;

    default:
      throw Error("There is no icon with that name");
  }
}

export default Icon;
