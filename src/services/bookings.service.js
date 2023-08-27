import { PAGE_SIZE } from "../utils/constants.js";
import { getToday } from "../utils/helpers.js";
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

export async function updateBooking(id, obj) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return data;
}

export async function getTodaysJobs(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, profiles (full_name,email)")
    // .eq("user_id", id)
    .or(
      `and(status.eq.unconfirmed,pickup_date.eq.${getToday()}),and(status.eq.picked-up,return_date.eq.${getToday()})`,
    )
    .order("created_at");

  if (error) {
    console.error(error);
    throw new Error("Bookings not found");
  }
  return data;
}

export async function getBookingsAfterDay(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, total_cost")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    console.error(error);
    throw new Error("Bookings not found");
  }

  return data;
}

export async function getBookedAfterDate(date) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, profiles (full_name,email)")
    .gte("pickup_date", date)
    .lte("return_date", getToday());

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }

  return data;
}
