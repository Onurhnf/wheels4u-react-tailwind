import { Auth } from "@supabase/auth-ui-react";

import React from "react";
import LoginForm from "../components/auth/LoginForm.jsx";

function AuthPage() {
  return (
    <div className="grid h-screen grid-cols-1 items-center justify-center bg-stone-50 pb-32 md:grid-cols-2 ">
      <div className=" hidden h-screen flex-col items-center justify-center bg-emerald-300 md:flex md:shadow-lg md:shadow-emerald-500 ">
        <img className=" px-10 md:w-7/12 " src="./logo-light.png" alt="login" />
      </div>

      <LoginForm />
    </div>
  );
}

export default AuthPage;
