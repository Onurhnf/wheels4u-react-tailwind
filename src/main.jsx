import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex items-center justify-center bg-yellow-100 p-4 font-semibold">
      Update and Delete are not allowed if data is not created by you. For more
      detail, visit this project's &nbsp;
      <a
        target="_blank"
        href="https://github.com/Onurhnf/wheels4u-react-tailwind"
        rel="noreferrer"
        className="text-emerald-600 underline"
      >
        GitHub Repository &rarr;
      </a>
    </div>
    <App />
  </React.StrictMode>,
);
