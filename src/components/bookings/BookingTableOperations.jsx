import React from "react";
import Stack from "../ui/Stack.jsx";
import Filter from "../ui/Filter.jsx";
import SortBy from "../ui/SortBy.jsx";

function BookingTableOperations() {
  return (
    <Stack type={"horizontal"}>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "unconfirmed", label: "Unconfirmed" },
          { value: "picked-up", label: "Picked Up" },
          { value: "returned", label: "Returned" },
        ]}
      />

      <SortBy
        options={[
          {
            value: "booking_date-desc",
            label: "Sort by Booking Date (recent first)",
          },
          {
            value: "booking_date-asc",
            label: "Sort by Booking Date (oldest first)",
          },
          { value: "total_cost-asc", label: "Sort by Total Cost (low first)" },
          {
            value: "total_cost-desc",
            label: "Sort by Total Cost (high first)",
          },
        ]}
      />
    </Stack>
  );
}

export default BookingTableOperations;
