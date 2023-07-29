import React from "react";

function FormRow({ label, error, children }) {
  return (
    <div className="flex flex-col gap-2 px-0 py-1">
      {label && <label className="text-lg font-medium"> {label}</label>}
      {children}
      {error && (
        <span className="text-lg capitalize text-red-500"> {error}</span>
      )}
    </div>
  );
}

export default FormRow;
