import { PAGE_SIZE } from "../utils/constants.js";
import supabase from "./supabase.js";

export async function getVehicles({ filter, sortBy, page }) {
  let query = supabase
    .from("vehicles")
    .select("*", { count: "exact" })
    .eq("available", true);

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
    throw new Error("Vehicles could not be loaded");
  }

  return { data, count };
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
