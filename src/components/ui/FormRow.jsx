import React from "react";

function FormRow({ label, error, children, variant = "vertical" }) {
  const base = " ";

  const style = {
    vertical: "flex flex-col gap-2 px-0 py-1",
    horizontal:
      "grid grid-cols-[15rem_1fr_1.2fr] items-center gap-9 border-b border-b-gray-100 px-0 py-3 first:pt-1 last:border-b-0 last:pb-1 [&:has(button)]:flex [&:has(button)]:justify-end [&:has(button)]:gap-5",
  };

  return (
    <div className={style[variant]}>
      {label && (
        <label className="text-lg font-medium capitalize"> {label}</label>
      )}
      {children}
      {error && (
        <span className="text-sm capitalize text-red-500"> • {error}</span>
      )}
    </div>
  );
}

export default FormRow;
