import { PAGE_SIZE } from "../utils/constants.js";
import supabase from "./supabase.js";

export async function getBookings({ filter, sortBy, page }) {
  let query = supabase.from("bookings").select(
    `
  *,
  vehicles (
    vehicle_type
  ),
  profiles (
    full_name,
    email
  )
`,
    { count: "exact" },
  );

  // FILTER
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  // SORT
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return { data, count };
}
