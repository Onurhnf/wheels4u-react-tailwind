import React from "react";
import Button from "./Button.jsx";

function ConfirmHandler({
  type,
  onConfirm,
  disabled,
  onCloseModal,
  title,
  header,
}) {
  const base = "focus:outline-none ";
  const style = {
    delete:
      base + "bg-red-700 hover:bg-red-800 focus:bg-red-800 focus:ring-red-800",
    "picked-up":
      base +
      "bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-600 focus:ring-emerald-600",
  };

  return (
    <div className=" flex w-80 flex-col gap-5 ">
      <h3 className="text-2xl font-semibold">{header}</h3>
      <p className="mb-5 text-gray-500">{title}</p>

      <div className="flex justify-end gap-5">
        <Button
          variant={"secondary"}
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button
          className={style[type]}
          variant={"small"}
          disabled={disabled}
          onClick={() => {
            onConfirm();
            onCloseModal();
          }}
        >
          {header}
        </Button>
      </div>
    </div>
  );
}

export default ConfirmHandler;
