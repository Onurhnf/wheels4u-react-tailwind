import supabase from "./supabase.js";

export async function getVehicles() {
  const { data, error } = await supabase
    .from("vehicles")
    .select("*")
    .eq("available", true);

  if (error) {
    console.error(error);
    throw new Error("Vehicles could not be loaded");
  }

  return data;
}

export async function createEditVehicle(newVehicles, id) {
  // 1. Create/edit vehicles
  let query = supabase.from("vehicles");

  // A) CREATE
  if (!id) query = query.insert([{ ...newVehicles }]);

  // B) EDIT
  if (id) query = query.update({ ...newVehicles }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Vehicles could not be created");
  }

  return data;
}

export async function deleteVehicle(id) {
  const { data, error } = await supabase.from("vehicles").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Vehicle could not be deleted");
  }

  return data;
}
