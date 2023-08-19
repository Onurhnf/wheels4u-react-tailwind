import React, { useEffect } from "react";


function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard - Wheels 4U";

    return () => {
      document.title = "Wheels 4U";
    };
  }, []);
  return <div>Dashboard</div>;
}

export default Dashboard;
