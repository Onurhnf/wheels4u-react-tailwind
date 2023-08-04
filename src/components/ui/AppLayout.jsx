import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";

function AppLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  let sidebarStyle;

  if (isSidebarOpen) {
    sidebarStyle =
      "grid-cols-[260px_1fr] grid h-screen grid-rows-[auto_1fr] transition-all duration-300";
  } else {
    sidebarStyle =
      "grid h-screen grid-cols-sidebar-collapsed grid-rows-[auto_1fr] transition-all duration-300 ";
  }

  return (
    <div className={sidebarStyle}>
      <Header />
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <main className=" overflow-scroll bg-gray-50 p-[4rem_4.8rem_6.4rem]">
        <div className="m-[0px_auto] flex max-w-7xl flex-col gap-[3.2rem]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
