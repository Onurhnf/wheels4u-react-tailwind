import React from "react";
import Filter from "../ui/Filter.jsx";

function DashboardOperations() {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: "Last 7 Days" },
        { value: "30", label: "Last 30 Days" },
        { value: "90", label: "Last 90 Days" },
      ]}
    />
  );
}

export default DashboardOperations;
