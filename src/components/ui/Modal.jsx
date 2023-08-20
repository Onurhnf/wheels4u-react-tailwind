import { cloneElement, createContext, useContext, useState } from "react";

import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../../hooks/useOutsideClick.js";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState([]);

  const close = (closeWindow) => {
    setOpenName((prev) => prev.filter((window) => window !== closeWindow));
  };

  const open = (openWindow) => {
    if (!openName.includes(openWindow)) {
      setOpenName((prev) => [...prev, openWindow]);
    }
  };

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  if (!openName.includes(name)) return null;

  return createPortal(
    <div className="fixed left-0 top-0 z-50 h-screen w-full bg-white/5 backdrop-blur-[2px] transition-all duration-500">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  rounded-lg border border-emerald-200 bg-white px-10 py-8 shadow-lg shadow-emerald-300 transition-all duration-500">
        <button
          className="absolute right-8 top-5 translate-x-3 rounded-sm border-0 bg-none p-1 transition-all duration-200 hover:bg-gray-200"
          onClick={() => close(name)}
        >
          <HiXMark className="h-6 w-6 text-emerald-600" />
        </button>

        <div>{cloneElement(children, { onCloseModal: () => close(name) })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
