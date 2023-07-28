import React from "react";
import BookingTable from "../components/bookings/BookingTable.jsx";
import Stack from "../components/ui/Stack.jsx";

function BookingsPage() {
  return (
    <>
      <Stack type={"horizontal"}>Bookings</Stack>
      <Stack>
        <BookingTable />
      </Stack>
    </>
  );
}

export default BookingsPage;
