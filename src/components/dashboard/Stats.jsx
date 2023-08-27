import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
} from "react-icons/hi2";
import Stat from "./Stat.jsx";

function Stats({ bookings, confirmedRents }) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((acc, cur) => acc + cur.total_cost, 0);

  // 3.
  const rented = confirmedRents.length;

  return (
    <>
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes className="text-3xl" />}
        value={sales}
      />
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase className="text-3xl" />}
        value={numBookings}
      />

      <Stat
        title="Confirmed Rents"
        color="yellow"
        icon={<HiOutlineCalendarDays className="text-3xl" />}
        value={rented}
      />
    </>
  );
}

export default Stats;
