import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "inline-block text-sm  bg-stone-800 font-semibold uppercase tracking-wide text-stone-50 transition-colors duration-300 hover:bg-stone-700 focus:bg-stone-700 focus:outline-none focus:ring focus:ring-stone-700 focus:ring-offset-2 disabled:cursor-not-allowed drop-shadow-md hover:drop-shadow-none ";

  const styles = {
    primary: base + " rounded-full px-4 py-3 md:px-6 md:py-4",
    small: base + " rounded-full px-4 py-2 md:px-5 md:py-2.5 text-xs",
    sideMenu: base + " rounded-lg px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block text-sm rounded-3xl border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-500 transition-colors duration-300 bg-stone-50 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 drop-shadow-my2 hover:drop-shadow-none",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
