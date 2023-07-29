import React, { useState } from "react";
import Form from "../ui/Form.jsx";
import FormRow from "../ui/FormRow.jsx";
import Button from "../ui/Button.jsx";
import { useGoogleLogin, useMailLogin } from "./hooks/useLogin.js";
import { FcGoogle } from "react-icons/fc";
import Stack from "../ui/Stack.jsx";
import Spinner from "../ui/Spinner.jsx";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useMailLogin();
  const { googleLogin, isLoading: isGoogleLoading } = useGoogleLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }

  function handleGoogleLogin(e) {
    e.preventDefault();
    googleLogin();
  }

  return (
    <main className="flex h-screen flex-col items-center justify-start  md:justify-center ">
      <img
        className=" mt-20 w-52 px-10 md:mt-0 md:hidden md:w-7/12 "
        src="./logo-light.png"
        alt="login"
      />
      <p className="mb-6 mt-9 text-2xl font-extrabold md:mt-0">
        Log in to Your Account
      </p>
      <Form onSubmit={handleSubmit}>
        <FormRow label={"Email Adress"}>
          <input
            className="input"
            placeholder="example@mail.com"
            type="email"
            id="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </FormRow>

        <FormRow label="Password">
          <input
            className="input mb-4"
            type="password"
            placeholder="* * * * * *"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </FormRow>
        <FormRow>
          <Button disabled={isLoading} type={"small"} onClick={handleSubmit}>
            {isLoading ? (
              <div className="-my-1 flex justify-center ">
                <Spinner />
              </div>
            ) : (
              "Submit"
            )}
          </Button>
        </FormRow>
        <FormRow>
          <span className="duration-400 my-5 rounded-full border-t-4  border-emerald-300/50 opacity-100 transition-all group-hover:border-emerald-300/80" />
        </FormRow>
        <FormRow>
          <Button onClick={handleGoogleLogin} disabled={isLoading}>
            <Stack
              type={"horizontal"}
              className="gap-2 rounded-lg border-2 p-2 hover:border-emerald-300 hover:bg-stone-50 hover:shadow-none"
            >
              {isGoogleLoading ? (
                <div className="-my-1 flex justify-center ">
                  <Spinner />
                </div>
              ) : (
                <>
                  <FcGoogle size={"2.3rem"} />
                  <span className="text-base font-bold text-stone-600">
                    Login With Google
                  </span>
                </>
              )}
            </Stack>
          </Button>
        </FormRow>
      </Form>
    </main>
  );
}

export default LoginForm;
