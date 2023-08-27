import { useForm } from "react-hook-form";
import Form from "../ui/Form.jsx";
import FormRow from "../ui/FormRow.jsx";
import Button from "../ui/Button.jsx";
import { useSignup } from "./hooks/useSignup.js";
import { useNavigate } from "react-router-dom";
import Stack from "../ui/Stack.jsx";

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const navigate = useNavigate();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      },
    );
  }

  return (
    <main className="flex h-screen flex-col items-center justify-start  md:justify-center ">
      <Button
        className="absolute left-6 top-5 border-2 border-gray-900 drop-shadow-my"
        onClick={() => navigate("/login")}
        variant={"small"}
      >
        &larr; Go to login page
      </Button>
      <img
        className=" mt-20 w-52 px-10 md:mt-0 md:hidden md:w-7/12 "
        src="./logo-light-no-subtext.png"
        alt="login"
      />
      <p className="mb-6 mt-9 text-2xl font-extrabold md:mt-0">
        Sign up to Wheels 4U
      </p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Full name" error={errors?.fullName?.message}>
          <input
            className="input"
            type="text"
            id="fullName"
            disabled={isLoading}
            {...register("fullName", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Email address" error={errors?.email?.message}>
          <input
            className="input"
            type="email"
            id="email"
            disabled={isLoading}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
          />
        </FormRow>

        <FormRow label="Password" error={errors?.password?.message}>
          <input
            className="input"
            type="password"
            id="password"
            disabled={isLoading}
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password needs a minimum of 6 characters",
              },
            })}
          />
        </FormRow>

        <FormRow
          label="Confirm password"
          error={errors?.passwordConfirm?.message}
        >
          <input
            className="input"
            type="password"
            id="passwordConfirm"
            disabled={isLoading}
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
          />
        </FormRow>

        <FormRow>
          <Stack className="gap-2" type={"horizontal"}>
            <Button variant={"small"} disabled={isLoading}>
              Create new user
            </Button>

            <Button
              variant="secondary"
              type="reset"
              disabled={isLoading}
              onClick={reset}
            >
              Cancel
            </Button>
          </Stack>
        </FormRow>
      </Form>
    </main>
  );
}

export default SignupForm;
