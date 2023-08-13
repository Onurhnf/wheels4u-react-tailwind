import React from "react";
import Table from "../ui/Table.jsx";
import CrmRow from "./CrmRow.jsx";
import { useCrm } from "./hooks/useCrm.js";
import Loader from "../ui/Loader.jsx";

function CrmTable() {
  const { isLoading, error, users } = useCrm();

  if (isLoading) return <Loader />;

  return (
    <Table columns="crmList">
      <Table.Header>
        <div>E-mail</div>
        <div>Full Name</div>
      </Table.Header>
      <Table.Body
        data={users}
        render={(user) => <CrmRow user={user} key={user.id} />}
      />
    </Table>
  );
}

export default CrmTable;
