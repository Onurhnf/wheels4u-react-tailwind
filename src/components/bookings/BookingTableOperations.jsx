import React from "react";
import Stack from "../ui/Stack.jsx";
import Filter from "../ui/Filter.jsx";
import SortBy from "../ui/SortBy.jsx";

function BookingTableOperations() {
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

      <SortBy
        options={[
          { value: "rental_rate-asc", label: "Sort by price (low first)" },
          { value: "rental_rate-desc", label: "Sort by price (high first)" },
          { value: "mileage-asc", label: "Sort by mileage (low first)" },
          { value: "mileage-desc", label: "Sort by mileage (high first)" },
          { value: "year-asc", label: "Sort by Year (low first)" },
          { value: "year-desc", label: "Sort by Year (high first)" },
        ]}
      />
    </Stack>
  );
}

export default BookingTableOperations;
