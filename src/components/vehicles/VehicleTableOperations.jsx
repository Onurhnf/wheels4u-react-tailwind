import React from "react";
import Stack from "../ui/Stack.jsx";
import Filter from "../ui/Filter.jsx";

function VehicleTableOperations() {
  return (
    <Stack type={"horizontal"}>
      <Filter
        filterField="type"
        options={[
          { value: "all", label: "All" },
          { value: "bike", label: "Bike" },
          { value: "car", label: "Car" },
        ]}
      />
    </Stack>
  );
}

export default VehicleTableOperations;
