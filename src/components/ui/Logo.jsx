function Logo({ isSidebarOpen }) {
  const src = "/logo-light2.png";

  return (
    isSidebarOpen && (
      <div className=" text-center transition-all md:block">
        <img className="h-36 w-auto" src={src} alt="Logo" />
      </div>
    )
  );
}

export default Logo;
