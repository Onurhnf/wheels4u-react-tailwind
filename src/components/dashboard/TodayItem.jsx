import StatusBadge from "../ui/StatusBadge.jsx";
import Button from "../ui/Button.jsx";
import Stack from "../ui/Stack.jsx";
import { FaClock, FaMoneyBillAlt } from "react-icons/fa";
import { GiConfirmed, GiReturnArrow } from "react-icons/gi";
import Modal from "../ui/Modal.jsx";
import ConfirmHandler from "../ui/ConfirmHandler.jsx";
import { useRentReturn } from "../rent/hooks/useRentReturn.jsx";

function TodayItem({ job }) {
  const { id, status, isPaid, total_cost, profiles } = job;
  const { isRentReturning, rentReturn } = useRentReturn();
  const base = "items-center gap-7 rounded-xl border-2 p-1 font-semibold ";

  const style = {
    true: base + " border-emerald-200 bg-emerald-100 text-emerald-700",
    false: base + " border-amber-300 bg-amber-200 text-amber-700",
  };

  return (
    <Modal>
      <li className="grid grid-cols-[0.3fr_0.9fr_1fr_0.8fr_1fr] items-center gap-3 border-b border-b-gray-100 px-0 py-2 text-sm last:border-none">
        <p>#{id}</p>
        {status === "unconfirmed" && (
          <StatusBadge type="picked-up">Will Pick</StatusBadge>
        )}
        {status === "picked-up" && (
          <StatusBadge type="unconfirmed">Will Return</StatusBadge>
        )}

        <div className="font-medium">
          {profiles?.email ?? (
            <span className="text-red-300">*Hidden Data*</span>
          )}
        </div>
        <Stack type={"horizontal"} className={style[isPaid]}>
          <div className="flex flex-row items-center justify-center gap-3">
            {isPaid ? (
              <>
                <GiConfirmed className="text-lg" />
                <p>Paid</p>
              </>
            ) : (
              <>
                <FaClock className="text-lg" />
                <p className="font-normal">Not Paid</p>
              </>
            )}
          </div>
        </Stack>

        {status === "unconfirmed" && (
          <Button variant={"small"} className="w-fit" to={`/rent/${id}`}>
            Picked Up
          </Button>
        )}
        {status === "picked-up" && (
          <Modal.Open opens="picked-up">
            <Button variant={"secondary"} className="w-fit">
              Returned
            </Button>
          </Modal.Open>
        )}
      </li>

      <Modal.Window name="picked-up">
        <ConfirmHandler
          type={"picked-up"}
          disabled={isRentReturning}
          header={"Returned"}
          title={`Is this ${!isPaid ? `unpaid` : ""} #${id} returned ${
            !isPaid
              ? `and ${profiles?.full_name} paid total cost (${total_cost}₺)`
              : ""
          } ?`}
          onConfirm={() => rentReturn({ bookingId: id })}
        />
      </Modal.Window>
    </Modal>
  );
}

export default TodayItem;
