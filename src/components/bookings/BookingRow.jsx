import React from "react";
import Table from "../ui/Table.jsx";
import { format, formatISO, parse, parseISO } from "date-fns";
import Stack from "../ui/Stack.jsx";
import { differenceInDays } from "date-fns/esm";

function BookingRow({ booking }) {
  const {
    id: bookingId,
    vehicles,
    profiles,
    booking_date,
    pickup_date,
    return_date,
    total_cost,
    status,
  } = booking;
  const day_differance = differenceInDays(
    parseISO(return_date),
    parseISO(pickup_date),
  );
  return (
    <Table.Row>
      <div className=" text-base font-semibold uppercase text-gray-600">
        {vehicles?.vehicle_type}
      </div>
      <Stack className="my-0 gap-1">
        <span className="text-base font-semibold text-gray-700 ">
          {profiles?.full_name}
        </span>
        <span className="text-xs">{profiles?.email} </span>
      </Stack>
      <div className="font-semibold capitalize">
        {format(parseISO(booking_date), "dd.MM.yyyy")}
      </div>
      <div className=" font-semibold capitalize">
        <p className="mb-1">
          {day_differance === 0
            ? day_differance + 1 + " day"
            : day_differance + 1 + " days"}
        </p>
        <Stack type={"horizontal"} className="my-0 ">
          <span className="text-xs font-normal ">
            {format(parseISO(pickup_date), "dd.MM.yyyy")} &rarr;{" "}
            {format(parseISO(return_date), "dd.MM.yyyy")}
          </span>
        </Stack>
      </div>
      <div className="font-semibold uppercase">{status}</div>{" "}
      {/*TODO badge status */}
      <div className="text-base font-semibold">{total_cost}₺</div>
    </Table.Row>
  );
}

export default BookingRow;
