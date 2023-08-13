import React from "react";
import { useBookings } from "./hooks/useBookings.js";
import Table from "../ui/Table.jsx";
import BookingRow from "./BookingRow.jsx";
import Loader from "../ui/Loader.jsx";
import { useSearchParams } from "react-router-dom";

function BookingTable() {
  const { isLoading, error, bookings } = useBookings();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Loader />;
  //TODO handle  user and date

  const filterValue = searchParams.get("type") || "all";

  // Filter
  let filteredBookings;
  if (filterValue === "all") filteredBookings = bookings;

  if (filterValue === "bike")
    filteredBookings = bookings.filter(
      (booking) => booking.vehicles.vehicle_type === "bike",
    );

  if (filterValue === "car")
    filteredBookings = bookings.filter(
      (booking) => booking.vehicles.vehicle_type === "car",
    );

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
        data={filteredBookings}
        render={(booking) => <BookingRow booking={booking} key={booking.id} />}
      />
    </Table>
  );
}

export default BookingTable;
