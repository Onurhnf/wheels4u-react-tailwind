import React, { useEffect, useState } from "react";
import Table from "../components/ui/Table.jsx";
import { getBookings } from "../services/bookings.service.js";

function Dashboard() {
  //TODO handle data
  const [cars, setCars] = useState();
  function asd() {
    getBookings().then((data) => {
      console.log(data);

      setCars(data);
    });
  }

  useEffect(() => {
    asd();
  }, []);

  return (
    <>
      <Table columns="carList">
        <Table.Header>
          <div>Make</div>
          <div>Model</div>
          <div>Year</div>
          <div>Color</div>
          <div>Mileage</div>
          <div>Rental Rate</div>
        </Table.Header>
        <Table.Body data={cars} />
      </Table>
    </>
  );
}

export default Dashboard;
