import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../../services/auth.service.js";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  console.log("asd", user);

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
