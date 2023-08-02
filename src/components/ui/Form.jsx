import React from "react";

function Form({ type = "default", onSubmit, children }) {
  const base = "overflow-hidden text-xl group";

  let styles = {
    default:
      base +
      " py-5 px-10 bg-gray-100 border border-emerald-300 rounded-2xl shadow-md transition-all duration-300 hover:shadow-emerald-300",
    modal: base + " w-[800px]",
  };

  return (
    <form onSubmit={onSubmit} className={styles[type]}>
      {children}
    </form>
  );
}

export default Form;
