import React from "react";
import Table from "../ui/Table.jsx";

function CrmRow({ user }) {
  const { email, full_name } = user;

  return (
    <Table.Row>
      <div className=" text-lg">{email}</div>
      <div className=" text-lg uppercase">{full_name}</div>
    </Table.Row>
  );
}

export default CrmRow;
