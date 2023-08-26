import React, { useEffect } from "react";
import Stack from "../components/ui/Stack.jsx";
import RentDetail from "../components/rent/RentDetail.jsx";

function RentPage() {
  useEffect(() => {
    document.title = "Rent - Wheels 4U";

    return () => {
      document.title = "Wheels 4U";
    };
  }, []);

  return (
    <>
      <Stack>
        <RentDetail />
      </Stack>
    </>
  );
}

export default RentPage;
