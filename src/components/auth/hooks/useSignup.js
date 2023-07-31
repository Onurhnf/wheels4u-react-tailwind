import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signUpApi } from "../../../services/auth.service.js";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      toast.success("Account successfully created!");
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1500);
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error(err.message);
    },
  });

  return { signup, isLoading };
}
