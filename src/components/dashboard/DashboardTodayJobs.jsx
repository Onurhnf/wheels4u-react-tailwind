import React from "react";
import { useTodaysJobs } from "./hooks/useTodaysJobs.js";
import Stack from "../ui/Stack.jsx";
import Spinner from "../ui/Spinner.jsx";
import TodayItem from "./TodayItem.jsx";

function DashboardTodayJobs() {
  const { jobs, isLoading } = useTodaysJobs();

  return (
    <div className="col-span-2 flex flex-col gap-6 rounded-lg border border-gray-200 bg-white p-8 pt-5 shadow-none hover:shadow-md">
      <Stack type="horizontal">
        <p className="text-base font-semibold">Today's Jobs</p>
      </Stack>

      {!isLoading ? (
        jobs?.length > 0 ? (
          <ul className="overflow-scroll overflow-x-hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
            {jobs.map((job) => (
              <TodayItem job={job} key={job.id} />
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-center text-xl font-medium">
            No Active Job Today
          </p>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default DashboardTodayJobs;
