import { useQuery } from "@tanstack/react-query";
import { getTodaysJobs } from "../../../services/bookings.service.js";
import { useUser } from "../../auth/hooks/useUser.js";

export function useTodaysJobs() {
  const { user } = useUser();

  const { isLoading, data: jobs } = useQuery({
    queryFn: () => getTodaysJobs(user.id),
    queryKey: ["today-activity"],
  });

  return { jobs, isLoading };
}
