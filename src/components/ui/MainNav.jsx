import MainNavLi from "./MainNavLi.jsx";

function MainNav({ isSidebarOpen }) {
  return (
    <nav>
      <ul className="flex flex-col gap-2 overflow-hidden">
        <MainNavLi to={"dashboard"} isSidebarOpen={isSidebarOpen} />
        <MainNavLi to={"bookings"} isSidebarOpen={isSidebarOpen} />
        <MainNavLi to={"wheels"} isSidebarOpen={isSidebarOpen} />
        <MainNavLi to={"crm"} isSidebarOpen={isSidebarOpen} />
        <MainNavLi to={"logout"} isSidebarOpen={isSidebarOpen} />
      </ul>
    </nav>
  );
}

export default MainNav;
