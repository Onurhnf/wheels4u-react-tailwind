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

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select(`*, vehicles (*), profiles (full_name,email)`)
    .eq("id", id)
    .single();
  console.log("asdasd", data);

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}

export async function createEditBooking(newBooking, id) {
  // 1. Create/edit vehicles
  let query = supabase.from("bookings");

  // A) CREATE
  if (!id) query = query.insert([{ ...newBooking }]);

  // B) EDIT
  if (id) query = query.update({ ...newBooking }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }

  return data;
}
