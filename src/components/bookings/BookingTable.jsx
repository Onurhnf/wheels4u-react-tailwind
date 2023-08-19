import React from "react";
import { useBookings } from "./hooks/useBookings.js";
import Table from "../ui/Table.jsx";
import BookingRow from "./BookingRow.jsx";
import Loader from "../ui/Loader.jsx";
import Pagination from "../ui/Pagination.jsx";

function BookingTable() {
  const { isLoading, error, bookings, count } = useBookings();

  if (isLoading) return <Loader />;
  //TODO
  return (
    <Table columns="bookingList">
      <Table.Header>
        <div>Type</div>
        <div>User</div>
        <div>Booking Date</div>
        <div>Rental Duration</div>
        <div>Status</div>

        <div>Total Cost</div>
      </Table.Header>
      <Table.Body
        data={bookings}
        render={(booking) => <BookingRow booking={booking} key={booking.id} />}
      />
      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
}

export default BookingTable;
