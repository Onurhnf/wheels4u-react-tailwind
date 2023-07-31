import { Link } from "react-router-dom";

function Button({
  children,
  disabled,
  to,
  variant,
  onClick,
  type,
  className = " ",
}) {
  const base =
    "inline-block text-sm  bg-emerald-400 font-semibold uppercase tracking-wide text-stone-50 transition-colors duration-300 hover:bg-emerald-500 focus:bg-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed drop-shadow-md hover:drop-shadow-none " +
    className;

  const styles = {
    primary: base + " rounded-full px-4 py-3 md:px-6 md:py-4",
    small: base + " rounded-full px-4 py-2 md:px-5 md:py-2.5 text-xs",
    sideMenu: base + " rounded-lg px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block text-xs rounded-3xl border-2 border-emerald-300 font-semibold uppercase tracking-wide text-stone-500 transition-colors duration-300 bg-stone-50 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5 drop-shadow-md hover:drop-shadow-none",
  };

  if (to)
    return (
      <Link to={to} className={styles[variant]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={styles[variant]}
      >
        {children}
      </button>
    );

  return (
    <button disabled={disabled} type={type} className={styles[variant]}>
      {children}
    </button>
  );
}

export default Button;
