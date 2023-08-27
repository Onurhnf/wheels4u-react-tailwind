import React from "react";
import DashboardTodayJobs from "./DashboardTodayJobs.jsx";
import Stats from "./Stats.jsx";
import { useBookingsAfterDay } from "./hooks/useBookingsAfterDay.js";
import Spinner from "../ui/Spinner.jsx";
import { useBookedAfterDay } from "./hooks/useBookedAfterDay.js";

function DashboardLayout() {
  const { bookings, isLoading: loding1 } = useBookingsAfterDay();
  const { confirmedRents, isLoading: loading2 } = useBookedAfterDay();

  if (loding1 || loading2) return <Spinner />;

  return (
    <div className="grid grid-cols-3 grid-rows-[auto_21rem_auto] gap-7">
      <Stats bookings={bookings} confirmedRents={confirmedRents} />
      <DashboardTodayJobs />
    </div>
  );
}

export default DashboardLayout;
