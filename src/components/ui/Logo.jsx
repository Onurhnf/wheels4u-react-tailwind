function Logo() {
  const src = "/logo-light.png";

  return (
    <div className=" hidden text-center md:block">
      <img className="h-36 w-auto" src={src} alt="Logo" />
    </div>
  );
}

export default Logo;
