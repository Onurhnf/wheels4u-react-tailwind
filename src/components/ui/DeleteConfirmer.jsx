import React from "react";
import Button from "./Button.jsx";

function DeleteConfirmer({ type, onConfirm, disabled, onCloseModal }) {
  return (
    <div className=" flex w-80 flex-col gap-5 ">
      <h3 className="text-2xl font-semibold">Delete</h3>
      <p className="mb-5 text-gray-500">
        Are you sure you want to delete this {type} permanently? This action
        cannot be undone.
      </p>

      <div className="flex justify-end gap-5">
        <Button
          variant={"secondary"}
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button
          className="bg-red-700 hover:bg-red-800 focus:bg-red-800 focus:outline-none  focus:ring-red-800"
          variant={"small"}
          disabled={disabled}
          onClick={() => {
            onConfirm();
            onCloseModal();
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default DeleteConfirmer;
