import React from "react";
import { useLogout } from "./hooks/useLogout.js";
import { useEffect } from "react";
import Loader from "../ui/Loader.jsx";

function Logout() {
  const { logout, isLoading } = useLogout();

  useEffect(() => {
    logout();
  }, []);

  return <div>{isLoading ? <Loader /> : ""}</div>;
}

export default Logout;
