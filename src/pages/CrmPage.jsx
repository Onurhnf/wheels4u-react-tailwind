import React from "react";
import Stack from "../components/ui/Stack.jsx";
import CrmTable from "../components/crm/CrmTable.jsx";

function CrmPage() {
  return (
    <>
      <Stack type={"horizontal"}>
        <Stack>
          <p className="text-3xl font-semibold text-gray-700">All Users</p>
          <p className=" bg-yellow-100 p-1 text-center">
            In this demo version, the data will be limited.
          </p>
        </Stack>
      </Stack>
      <Stack>
        <CrmTable />
      </Stack>
    </>
  );
}

export default CrmPage;
