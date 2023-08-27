import React, { useEffect } from "react";
import Stack from "../components/ui/Stack.jsx";
import DashboardOperations from "../components/dashboard/DashboardOperations.jsx";
import DashboardLayout from "../components/dashboard/DashboardLayout.jsx";

function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard - Wheels 4U";

    return () => {
      document.title = "Wheels 4U";
    };
  }, []);
  return (
    <>
      <Stack type={"horizontal"}>
        <Stack>
          <p className="text-3xl font-semibold text-gray-700">Wellcome</p>
          <p className=" bg-yellow-50 p-1 text-center">
            In this demo version, in order to achieve greater data diversity,
            data from other users is also visible on your dashboard.
          </p>
        </Stack>
        <DashboardOperations />
      </Stack>
      <Stack>
        <DashboardLayout />
      </Stack>
    </>
  );
}

export default Dashboard;
