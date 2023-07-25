import React from "react";
import Table from "../components/ui/Table.jsx";

function Dashboard() {
  const bookings = [
    // CABIN 001
    {
      created_at: "fromToday(-20, true)",
      startDate: "fromToday(0)",
      endDate: "asd",
      cabinId: 1,
      guestId: 2,
      hasBreakfast: true,
      observations:
        "I have a gluten allergy and would like to request a gluten-free breakfast.",
      isPaid: false,
      numGuests: 1,
    },
  ];
  return (
    <>
      <Table columns="[0.6fr_2fr_2.4fr_1.4fr_1fr_3.2rem]">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>
        <Table.Body data={bookings} />
      </Table>
    </>
  );
}

export default Dashboard;
