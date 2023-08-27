import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getBookedAfterDate } from "../../../services/bookings.service.js";

export function useBookedAfterDay() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading, data: rents } = useQuery({
    queryFn: () => getBookedAfterDate(queryDate),
    queryKey: ["rents", `last-${numDays}`],
  });

  const confirmedRents = rents?.filter(
    (rent) => rent.status === "picked-up" || rent.status === "returned",
  );

  return { isLoading, rents, confirmedRents, numDays };
}
