import React from "react";
import Table from "../components/ui/Table.jsx";

function Dashboard() {
  const bookings = [
    {
      created_at: "asd",
      startDate: "asd",
      endDate: "asd",
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
          <div>Amount</div>
        </Table.Header>
        <Table.Body data={bookings} />
      </Table>
    </>
  );
}

export default Dashboard;
