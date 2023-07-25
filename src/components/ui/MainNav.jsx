import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import MainNavLi from "./MainNavLi.jsx";

function MainNav({ isSidebarOpen }) {
  return (
    <nav>
      <ul className="flex flex-col gap-2 overflow-hidden">
        <MainNavLi to={"dashboard"} isSidebarOpen={isSidebarOpen} />
        <MainNavLi to={"bookings"} isSidebarOpen={isSidebarOpen} />
      </ul>
    </nav>
  );
}

export default MainNav;
