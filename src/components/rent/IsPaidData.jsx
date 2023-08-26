import React from "react";
import Stack from "../ui/Stack.jsx";
import { FaClock, FaMoneyBillAlt } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";

function IsPaidData({ total_cost, isPaid }) {
  const base =
    "items-center gap-7 rounded-xl border-2 p-6 text-lg font-semibold ";

  const style = {
    true: base + " border-emerald-200 bg-emerald-100 text-emerald-700",
    false: base + " border-amber-300 bg-amber-200 text-amber-700",
  };

  return (
    <div className={style[isPaid]}>
      <Stack type={"horizontal"}>
        <div className="flex flex-row items-center justify-center gap-7">
          <FaMoneyBillAlt />
          <p>
            Total Cost &ensp;•&ensp;
            <span className="font-normal">{total_cost}₺</span>
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-3">
          {isPaid ? (
            <>
              <GiConfirmed />
              <p>Paid</p>
            </>
          ) : (
            <>
              <FaClock />
              <p className="font-normal">Will Pay on Return</p>
            </>
          )}
        </div>
      </Stack>
    </div>
  );
}

export default IsPaidData;
