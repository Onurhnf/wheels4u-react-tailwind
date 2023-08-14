import supabase from "./supabase.js";

export async function getBookings() {
  const { data, error, count } = await supabase.from("bookings").select(
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

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return { data, count };
}
