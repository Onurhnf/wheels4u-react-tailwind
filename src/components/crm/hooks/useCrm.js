import { useQuery } from "@tanstack/react-query";
import { getProfiles } from "../../../services/profile.service.js";


export function useCrm() {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["profiles"],
    queryFn: getProfiles,
  });

  return { isLoading, error, users };
}
