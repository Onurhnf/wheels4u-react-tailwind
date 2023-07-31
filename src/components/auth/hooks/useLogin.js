import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  loginApi,
  loginWithGithub,
  loginWithGoogle,
} from "../../../services/auth.service.js";
import { toast } from "react-hot-toast";

export function useMailLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("Successfuly logged in");
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}

export function useGoogleLogin() {
  const { mutate: googleLogin, isLoading } = useMutation({
    mutationFn: () => loginWithGoogle(),

    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Something went wrong");
    },
  });

  return { googleLogin, isLoading };
}

export function useGithubLogin() {
  const { mutate: githubLogin, isLoading } = useMutation({
    mutationFn: () => loginWithGithub(),

    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Something went wrong");
    },
  });

  return { githubLogin, isLoading };
}
