import supabase from "./supabase.js";

export async function getProfiles() {
  const { data, error } = await supabase.from("profiles").select("*");

  if (error) {
    console.error(error);
    throw new Error("Users could not be loaded");
  }

  return data;
}
