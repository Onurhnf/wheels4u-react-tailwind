import React from "react";
import Table from "../ui/Table.jsx";
import VehichleRow from "./VehicleRow.jsx";
import Loader from "../ui/Loader.jsx";
import { useVehicles } from "./hooks/useVehicles.js";
import Menu from "../ui/Menu.jsx";

function VehicleTable() {
  const { isLoading, error, vehicles } = useVehicles();

  if (isLoading) return <Loader />;

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
          data={vehicles}
          render={(vehicle) => (
            <VehichleRow vehicle={vehicle} key={vehicle.id} />
          )}
        />
      </Table>
    </Menu>
  );
}

export default VehicleTable;
