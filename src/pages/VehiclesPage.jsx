import React from "react";

import Stack from "../components/ui/Stack.jsx";
import VehicleTable from "../components/vehicles/VehicleTable.jsx";
import AddVehicle from "../components/vehicles/AddVehicle.jsx";

function VehiclesPage() {
  //TODO add type filter
  return (
    <>
      <Stack type={"horizontal"}>Vehicles</Stack>
      <Stack>
        <VehicleTable />
        <AddVehicle />
      </Stack>
    </>
  );
}

export default VehiclesPage;
