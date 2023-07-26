import supabase from "./supabase.js";

export async function getBookings() {
  const { data, error } = await supabase
    .from("cars")
    .select("*")
    .eq("available", true);

  if (error) {
    console.error(error);
    throw new Error("Cars could not be loaded");
  }

  return data;
}
