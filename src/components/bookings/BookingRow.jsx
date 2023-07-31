import React from "react";
import Table from "../ui/Table.jsx";
import { format, formatISO, parse, parseISO } from "date-fns";

function BookingRow({ booking }) {
  const {
    id: bookingId,
    vehicles,
    user_id,
    booking_date,
    pickup_date,
    return_date,
    total_cost,
    status,
  } = booking;

  return (
    <Table.Row>
      <div className=" text-xl font-semibold uppercase">
        {vehicles?.vehicle_type}
      </div>
      <div className="overflow-x-scroll text-2xl font-semibold capitalize text-gray-600">
        {user_id}
      </div>
      <div className="font-semibold capitalize">
        {format(parseISO(booking_date), "dd MM yyyy")}
      </div>
      <div className="font-semibold capitalize">
        {format(parseISO(pickup_date), "dd MM yyyy")}
      </div>
      <div className="font-semibold capitalize">
        {format(parseISO(return_date), "dd MM yyyy")}
      </div>
      <div className="text-xl font-semibold">{total_cost}₺</div>
      <div className="font-semibold uppercase">{status}</div>
    </Table.Row>
  );
}

export default BookingRow;
