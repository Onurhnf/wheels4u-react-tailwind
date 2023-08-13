import React from "react";
import Table from "../ui/Table.jsx";
import VehichleRow from "./VehicleRow.jsx";
import Loader from "../ui/Loader.jsx";
import { useVehicles } from "./hooks/useVehicles.js";
import Menu from "../ui/Menu.jsx";
import { useSearchParams } from "react-router-dom";

function VehicleTable() {
  const { isLoading, error, vehicles } = useVehicles();
  console.log(vehicles);
  const [searchParams] = useSearchParams();
  if (isLoading) return <Loader />;

  const filterValue = searchParams.get("type") || "all";

  let filteredVehicles;
  if (filterValue === "all") filteredVehicles = vehicles;

  if (filterValue === "bike")
    filteredVehicles = vehicles.filter(
      (vehicle) => vehicle.vehicle_type === "bike",
    );

  if (filterValue === "car")
    filteredVehicles = vehicles.filter(
      (vehicle) => vehicle.vehicle_type === "car",
    );

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
          data={filteredVehicles}
          render={(vehicle) => (
            <VehichleRow vehicle={vehicle} key={vehicle.id} />
          )}
        />
      </Table>
    </Menu>
  );
}

export default VehicleTable;
