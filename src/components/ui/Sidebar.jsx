// src/components/Sidebar.js
import React, { useState } from "react";
import Logo from "./Logo.jsx";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div
      className={
        "relative row-span-full flex flex-col  items-center gap-12 border-r border-r-gray-200 bg-gray-100 text-white"
      }
    >
      <button
        className="absolute -right-3 top-4 z-50 block rounded-lg bg-gray-800 p-2 text-white md:hidden"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
      </button>
      <Logo />
    </div>
  );
};

export default Sidebar;
