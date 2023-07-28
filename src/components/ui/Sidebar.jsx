// src/components/Sidebar.js
import React from "react";
import Logo from "./Logo.jsx";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import MainNav from "./MainNav.jsx";

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div
      className={
        "relative row-span-full flex flex-col items-center border-r border-r-gray-200 bg-stone-100 text-white drop-shadow-sm transition-all duration-300"
      }
    >
      <button
        className="absolute -right-5 top-4 z-50 block rounded-lg bg-gray-800 p-2 text-white md:hidden"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
      </button>
      <Logo isSidebarOpen={isSidebarOpen} />
      {!isSidebarOpen && <span className="h-[9.75rem] " />}
      <MainNav isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

export default Sidebar;
