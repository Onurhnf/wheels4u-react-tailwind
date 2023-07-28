import supabase from "./supabase.js";

export async function getBookings() {
  const { data, error } = await supabase.from("bookings").select(`
  *,
  vehicles (
    vehicle_type
  )
`);

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return data;
}
