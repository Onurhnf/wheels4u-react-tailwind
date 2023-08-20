import React, { useEffect } from "react";

import Stack from "../components/ui/Stack.jsx";
import VehicleTable from "../components/vehicles/VehicleTable.jsx";
import AddVehicle from "../components/vehicles/AddVehicle.jsx";
import VehicleTableOperations from "../components/vehicles/VehicleTableOperations.jsx";

function VehiclesPage({
  chooseable = false,
  setSelectedVehicle = null,
  onCloseModal,
}) {
  useEffect(() => {
    document.title = "Wheels - Wheels 4U";

    return () => {
      document.title = "Wheels 4U";
    };
  }, []);

  return (
    <>
      <Stack type={"horizontal"}>
        {!chooseable && (
          <p className="text-3xl font-semibold text-gray-700">All Wheels</p>
        )}
        <div style={{ marginBottom: chooseable ? "10px" : "0px" }}>
          <VehicleTableOperations />
        </div>
      </Stack>
      <Stack>
        <VehicleTable
          chooseable={chooseable}
          setSelectedVehicle={setSelectedVehicle}
          onCloseModal={onCloseModal}
        />
        {!chooseable && <AddVehicle />}
      </Stack>
    </>
  );
}

export default VehiclesPage;
