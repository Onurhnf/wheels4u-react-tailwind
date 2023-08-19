import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getVehicles } from "../../../services/vehicles.service.js";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../../utils/constants.js";

export function useVehicles() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get("vehicle_type") || "all";
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "vehicle_type", value: filterValue };

  // 2) SORT
  const sortByRaw = searchParams.get("sortBy") || "make-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  //Pagination
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: vehicles, count } = {},
    error,
  } = useQuery({
    queryKey: ["vehicles", filter, sortBy, page],
    queryFn: () => getVehicles({ filter, sortBy, page }),
  });

  // Pre Fetch
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["vehicles", filter, sortBy, page + 1],
      queryFn: () => getVehicles({ filter, sortBy, page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["vehicles", filter, sortBy, page - 1],
      queryFn: () => getVehicles({ filter, sortBy, page: page - 1 }),
    });

  return { isLoading, error, vehicles, count };
}
