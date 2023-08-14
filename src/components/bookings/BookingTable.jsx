import React from "react";
import { useBookings } from "./hooks/useBookings.js";
import Table from "../ui/Table.jsx";
import BookingRow from "./BookingRow.jsx";
import Loader from "../ui/Loader.jsx";
import { useSearchParams } from "react-router-dom";
import Pagination from "../ui/Pagination.jsx";

function BookingTable() {
  const { isLoading, error, bookings, count } = useBookings();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Loader />;

  const filterValue = searchParams.get("status") || "all";

  // Filter
  const filteredBookings =
    filterValue === "all"
      ? bookings
      : bookings.filter((booking) => booking.status === filterValue);

  const sortBy = searchParams.get("sortBy") || "booking_date-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  // Sort
  let sortedBookings;
  if (field === "booking_date") {
    sortedBookings = filteredBookings.sort(
      (a, b) => ("" + a[field]).localeCompare(b[field]) * -modifier,
    );
  } else {
    sortedBookings = filteredBookings.sort(
      (a, b) => (a[field] - b[field]) * modifier,
    );
  }

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
        data={sortedBookings}
        render={(booking) => <BookingRow booking={booking} key={booking.id} />}
      />
      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
}

export default BookingTable;
