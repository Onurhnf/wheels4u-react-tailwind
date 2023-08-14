import React from "react";

function StatusBadge({ type, children }) {
  const base = "w-fit uppercase text-xs font-semibold py-1 px-3 rounded-full ";

  const style = {
    "picked-up": base + "text-emerald-700 bg-emerald-100",
    returned: base + "bg-stone-200 text-stone-700",
    unconfirmed: base + "bg-sky-100 text-sky-700",
  };

  return <span className={style[type]}>{children}</span>;
}

export default StatusBadge;
