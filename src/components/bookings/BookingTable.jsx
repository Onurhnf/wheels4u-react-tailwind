import React from "react";
import { useBookings } from "./hooks/useBookings.js";
import Table from "../ui/Table.jsx";
import BookingRow from "./BookingRow.jsx";
import Loader from "../ui/Loader.jsx";

function BookingTable() {
  const { isLoading, error, bookings } = useBookings();

  if (isLoading) return <Loader />;
  //TODO handle total cost, user and date type

  return (
    <Table columns="bookingList">
      <Table.Header>
        <div>Type</div>
        <div>User</div>
        <div>Booking Date</div>
        <div>Pickup Date</div>
        <div>Return Date</div>
        <div>Total Cost</div>
        <div>Status</div>
      </Table.Header>
      <Table.Body
        data={bookings}
        render={(booking) => <BookingRow booking={booking} key={booking.id} />}
      />
    </Table>
  );
}

export default BookingTable;
