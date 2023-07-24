import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";

function AppLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  let sidebarStyle;

  if (isSidebarOpen) {
    sidebarStyle =
      "md:grid-cols-[17rem_1fr] grid-cols-[12rem_1fr] grid h-screen grid-rows-[auto_1fr] transition-all duration-300";
  } else {
    sidebarStyle =
      "md:grid-cols-[17rem_1fr] grid-cols-[5rem_1fr] grid h-screen grid-rows-[auto_1fr] transition-all duration-300";
  }

  return (
    <div className={sidebarStyle}>
      <Header />
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <main className=" bg-red-200 px-[4.8rem] pb-[6.4rem] pt-16">
        <div className="mx-auto my-0 flex max-w-[120rem] flex-col gap-[3.2rem]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
