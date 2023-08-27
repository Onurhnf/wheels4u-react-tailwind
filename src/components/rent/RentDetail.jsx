import React from "react";
import { useBooking } from "../bookings/hooks/useBooking.js";
import Stack from "../ui/Stack.jsx";
import Loader from "../ui/Loader.jsx";
import IsPaidData from "./IsPaidData.jsx";
import Button from "../ui/Button.jsx";
import { MdPedalBike } from "react-icons/md";
import { GiCartwheel } from "react-icons/gi";
import { FaCarSide, FaUser, FaCalendarCheck } from "react-icons/fa";
import { differenceInDays, format, parseISO } from "date-fns/esm";
import RentDetailSectionPart from "./RentDetailSectionPart.jsx";
import { useMoveBack } from "../../hooks/useMoveback.js";
import { useRent } from "./hooks/useRent.jsx";
import Spinner from "../ui/Spinner.jsx";
import Modal from "../ui/Modal.jsx";
import ConfirmHandler from "../ui/ConfirmHandler.jsx";

function RentDetail() {
  const { booking, isLoading } = useBooking();
  const { isRenting, rent } = useRent();
  const moveback = useMoveBack();
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

  const IconComponent = iconMap[vehicles?.vehicle_type];
  const day_differance = differenceInDays(
    parseISO(return_date),
    parseISO(pickup_date),
  );

  return (
    <>
      <Modal>
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

              <Stack type={"horizontal"}>
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
              <RentDetailSectionPart
                Icon={<FaUser />}
                firstP={
                  profiles?.full_name ?? (
                    <span className="text-red-300">*Hidden Data*</span>
                  )
                }
                secondP={
                  profiles?.email ?? (
                    <span className="text-red-300">*Hidden Data*</span>
                  )
                }
              />
              <RentDetailSectionPart
                Icon={<FaCalendarCheck />}
                firstP={"Booking date"}
                secondP={`${format(parseISO(booking_date), "dd.MM.yyyy")}`}
              />
            </section>
            <section className="flex flex-col gap-4 px-10 py-8">
              <RentDetailSectionPart
                Icon={<IconComponent className="text-3xl" />}
                firstP={"Wheel Make"}
                secondP={`• ${vehicles?.make}`}
              />
              <RentDetailSectionPart
                Icon={<GiCartwheel className="text-3xl" />}
                firstP={"Model"}
                secondP={`• ${vehicles.model}`}
              />
            </section>
          </Stack>
          <section className="flex flex-col gap-4 px-10 py-8">
            <IsPaidData isPaid={isPaid} total_cost={total_cost} />
          </section>
        </section>
        <footer>
          <Stack type={"horizontal"}>
            <div></div>
            <div className="flex gap-4 px-5 ">
              <Button
                variant={"secondary"}
                onClick={() => moveback()}
                disabled={isRenting}
              >
                &larr; Go back
              </Button>
              <Modal.Open opens="confirm">
                <Button
                  variant={"primary"}
                  className="normal-case"
                  disabled={isRenting}
                >
                  {isRenting ? (
                    <div className="-my-1 flex justify-center ">
                      <Spinner />
                    </div>
                  ) : (
                    `Rent the Booking - #${bookingId}`
                  )}
                </Button>
              </Modal.Open>
            </div>
          </Stack>
        </footer>
        <Modal.Window name="confirm">
          <ConfirmHandler
            type={"confirm"}
            disabled={isRenting}
            header={"Confirm"}
            title={`Is ${
              profiles?.full_name === undefined
                ? "*Hidden Data*"
                : profiles.full_name
            } here and ready to Pick Up the Wheel?`}
            onConfirm={() => rent({ bookingId })}
          />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default RentDetail;
