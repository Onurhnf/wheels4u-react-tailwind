import React from "react";
import LoginForm from "../components/auth/LoginForm.jsx";
import { useLocation } from "react-router-dom";
import SignupForm from "../components/auth/SignupForm.jsx";
function AuthPage() {
  const location = useLocation();

  return (
    <div className="grid h-screen grid-cols-1 items-center justify-center bg-stone-50 pb-32 md:grid-cols-2 ">
      <div className=" hidden h-screen flex-col items-center justify-center bg-emerald-300 md:flex md:shadow-lg md:shadow-emerald-500 ">
        <img
          className=" px-10 md:w-7/12 "
          src="./logo-light-no-subtext.png"
          alt="login"
        />
      </div>

      {location.pathname === "/login" ? <LoginForm /> : <SignupForm />}
    </div>
  );
}

export default AuthPage;
