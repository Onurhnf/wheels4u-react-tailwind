import React from "react";
import Stack from "../ui/Stack.jsx";
import Filter from "../ui/Filter.jsx";
import SortBy from "../ui/SortBy.jsx";

function VehicleTableOperations() {
  return (
    <Stack type={"horizontal"}>
      <Filter
        filterField="vehicle_type"
        options={[
          { value: "all", label: "All" },
          { value: "bike", label: "Bike" },
          { value: "car", label: "Car" },
        ]}
      />

      <SortBy
        options={[
          { value: "make-asc", label: "Sort by Make (A-Z)" },
          { value: "make-desc", label: "Sort by Make (Z-A)" },
          { value: "model-asc", label: "Sort by Model (A-Z)" },
          { value: "model-desc", label: "Sort by Model (Z-A)" },
          { value: "rental_rate-asc", label: "Sort by price (low first)" },
          { value: "rental_rate-desc", label: "Sort by price (high first)" },
          { value: "mileage-asc", label: "Sort by mileage (low first)" },
          { value: "mileage-desc", label: "Sort by mileage (high first)" },
          { value: "year-asc", label: "Sort by Year (oldest first)" },
          { value: "year-desc", label: "Sort by Year (recent first)" },
        ]}
      />
    </Stack>
  );
}

export default VehicleTableOperations;
