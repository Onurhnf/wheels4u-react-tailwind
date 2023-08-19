import React, { useEffect } from "react";
import BookingTable from "../components/bookings/BookingTable.jsx";
import Stack from "../components/ui/Stack.jsx";
import BookingTableOperations from "../components/bookings/BookingTableOperations.jsx";

function BookingsPage() {
  useEffect(() => {
    document.title = "Bookings - Wheels 4U";

    return () => {
      document.title = "Wheels 4U";
    };
  }, []);

  return (
    <>
      <Stack type={"horizontal"}>
        <p className="text-3xl font-semibold text-gray-700">Bookings</p>
        <BookingTableOperations />
      </Stack>
      <Stack>
        <BookingTable />
      </Stack>
    </>
  );
}

export default BookingsPage;
