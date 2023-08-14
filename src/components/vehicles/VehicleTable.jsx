import React from "react";
import Table from "../ui/Table.jsx";
import VehichleRow from "./VehicleRow.jsx";
import Loader from "../ui/Loader.jsx";
import { useVehicles } from "./hooks/useVehicles.js";
import Menu from "../ui/Menu.jsx";
import { useSearchParams } from "react-router-dom";

function VehicleTable() {
  const { isLoading, error, vehicles } = useVehicles();
  const [searchParams] = useSearchParams();
  if (isLoading) return <Loader />;

  const filterValue = searchParams.get("type") || "all";

  // Filter
  const filteredVehicles =
    filterValue === "all"
      ? vehicles
      : vehicles.filter((vehicle) => vehicle.vehicle_type === filterValue);

  // 2) SORT
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  let sortedVehicles;
  if (field === "make" || field === "model") {
    sortedVehicles = filteredVehicles.sort(
      (a, b) => ("" + a[field]).localeCompare(b[field]) * modifier,
    );
  } else {
    sortedVehicles = filteredVehicles.sort(
      (a, b) => (a[field] - b[field]) * modifier,
    );
  }

  return (
    <Menu>
      <Table columns="vehicleList">
        <Table.Header>
          <div>Type</div>
          <div>Make</div>
          <div>Model</div>
          <div>Year</div>
          <div>Color</div>
          <div>Mileage (Km)</div>
          <div>Rental Rate (per day)</div>
        </Table.Header>
        <Table.Body
          data={sortedVehicles}
          render={(vehicle) => (
            <VehichleRow vehicle={vehicle} key={vehicle.id} />
          )}
        />
      </Table>
    </Menu>
  );
}

export default VehicleTable;
