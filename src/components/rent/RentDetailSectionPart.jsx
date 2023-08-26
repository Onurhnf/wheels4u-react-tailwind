import React from "react";
import { FaUser } from "react-icons/fa";

function RentDetailSectionPart({ Icon, firstP, secondP }) {
  return (
    <div className="flex items-center gap-7 text-lg font-semibold text-stone-700">
      {Icon}
      <p>{firstP}</p>
      <p className="text-base text-stone-600">{secondP}</p>
    </div>
  );
}

export default RentDetailSectionPart;
