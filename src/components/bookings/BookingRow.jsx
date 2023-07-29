import React from "react";
import Table from "../ui/Table.jsx";

function BookingRow({ booking }) {
  const {
    id: vehicleId,
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
      <div className="text-2xl font-semibold capitalize text-gray-600">
        {user_id}
      </div>
      <div className="text-2xl font-semibold capitalize text-gray-600">
        {booking_date}
      </div>
      <div className="font-semibold capitalize">{pickup_date}</div>
      <div className="font-semibold capitalize">{return_date}</div>
      <div className="font-semibold capitalize">{total_cost}₺</div>
      <div className="font-semibold capitalize">{status}</div>
    </Table.Row>
  );
}

export default BookingRow;
