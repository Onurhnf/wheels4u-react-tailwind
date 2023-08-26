import React from "react";
import { useBooking } from "../bookings/hooks/useBooking.js";
import Stack from "../ui/Stack.jsx";
import Loader from "../ui/Loader.jsx";
import { MdPedalBike } from "react-icons/md";
import { FaCarSide, FaUser, FaCalendarCheck } from "react-icons/fa";
import { GiCartwheel } from "react-icons/gi";
import { differenceInDays, format, parseISO } from "date-fns/esm";
import IsPaidData from "./IsPaidData.jsx";

function RentDetail() {
  const { booking, isLoading } = useBooking();

  if (isLoading) return <Loader />;

  const {
    id: bookingId,
    vehicles,
    profiles,
    booking_date,
    pickup_date,
    return_date,
    isPaid,
    total_cost,
  } = booking;

  const iconMap = {
    bike: MdPedalBike,
    car: FaCarSide,
  };
  console.log(booking);

  const IconComponent = iconMap[vehicles?.vehicle_type];
  const day_differance = differenceInDays(
    parseISO(return_date),
    parseISO(pickup_date),
  );

  return (
    <>
      <section className=" overflow-hidden rounded-md border bg-white">
        <header className="flex items-center justify-between bg-emerald-200 px-8 py-4 text-emerald-500">
          <div className="flex items-center gap-4 text-base font-semibold">
            <IconComponent className="text-5xl text-emerald-600" />
            <p className="text-4xl font-semibold text-stone-700">
              Rent Booking - #{bookingId}
            </p>
          </div>
          <Stack className="items-center gap-0 rounded-3xl border-2 border-emerald-400 bg-emerald-300 p-2 text-xl font-semibold text-stone-700">
            <p className="mb-1">
              {day_differance === 0
                ? day_differance + 1 + " day"
                : day_differance + 1 + " days"}
            </p>

            <Stack type={"horizontal"} className="my-0 ">
              <span className="text-sm">
                {format(parseISO(pickup_date), "dd.MM.yyyy")}{" "}
                <span className="font-bold">&rarr;</span>{" "}
                {format(parseISO(return_date), "dd.MM.yyyy")}
              </span>
            </Stack>
          </Stack>
        </header>

        <Stack className=" justify-stretch gap-14" type={"horizontal"}>
          <section className="flex flex-col gap-4 px-10 py-8">
            <div className="flex items-center gap-7 text-lg font-semibold text-stone-700">
              <FaUser />
              <p>• {profiles?.full_name}</p>
              <p className="text-base text-stone-600">• {profiles?.email}</p>
            </div>
            <div className="flex items-center gap-7 text-lg font-semibold text-stone-700">
              <FaCalendarCheck />
              <p>• Booking date</p>
              <p className="text-base text-stone-600">
                • {format(parseISO(booking_date), "dd.MM.yyyy")}
              </p>
            </div>
          </section>
          <section className="flex flex-col gap-4 px-10 py-8">
            <div className="flex items-center gap-7 text-lg font-semibold text-stone-700">
              <IconComponent />
              <p>• Wheel Make</p>
              <p className="text-base text-stone-600">• {vehicles?.make}</p>
            </div>
            <div className="flex items-center gap-7 text-lg font-semibold text-stone-700">
              <GiCartwheel />
              <p>• Model</p>
              <p className="text-base text-stone-600">• {vehicles.model}</p>
            </div>
          </section>
        </Stack>
        <section className="flex flex-col gap-4 px-10 py-8">
          <IsPaidData isPaid={isPaid} total_cost={total_cost} />
        </section>
        <footer>{/*TODO implement logic */}</footer>
      </section>
    </>
  );
}

export default RentDetail;
