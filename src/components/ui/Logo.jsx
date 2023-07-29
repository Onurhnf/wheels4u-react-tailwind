function Logo({ isSidebarOpen }) {
  const src = "/logo-light.png";

  return (
    isSidebarOpen && (
      <div className="mt-3 text-center transition-all md:block">
        <img className="h-36 w-auto" src={src} alt="Logo" />
      </div>
    )
  );
}

export default Logo;
