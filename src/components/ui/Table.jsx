import { createContext, useContext, useEffect, useState } from "react";
import { getBookings } from "../../services/bookings.service.js";

const StyledTable = ({ children, role }) => (
  <div
    role={role}
    className="overflow-hidden rounded-md border border-gray-200 text-xl"
  >
    {children}
  </div>
);

const CommonRow = ({ columns, className, children, role = "row" }) => {
  const base = "grid items-center gap-x-6 transition-none" + className;

  const styles = {
    carList: base + " grid-cols-[0.6fr_2fr_2.4fr_1.4fr_1fr_3.2rem]",
  };

  return (
    <div role={role} className={styles[columns]}>
      {children}
    </div>
  );
};
const StyledHeader = ({ columns, children }) => (
  <CommonRow
    columns={columns}
    className=" border-b border-gray-100 bg-gray-50 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-600"
  >
    {children}
  </CommonRow>
);

const StyledRow = ({ columns, children, role }) => (
  <CommonRow
    role={role}
    columns={columns}
    className=" border-b border-gray-100 px-6 py-3"
  >
    {children}
  </CommonRow>
);

const StyledBody = ({ children }) => (
  <section className="my-1">{children}</section>
);

const Footer = ({ children }) => (
  <footer className="flex justify-center bg-gray-50 py-3">{children}</footer>
);

const Empty = ({ children }) => (
  <p className="m-6 text-center text-base font-medium">{children}</p>
);

const TableContext = createContext();

const Table = ({ columns, children }) => (
  <TableContext.Provider value={{ columns }}>
    <StyledTable role="table">{children}</StyledTable>
  </TableContext.Provider>
);

const Header = ({ children }) => {
  const { columns } = useContext(TableContext);
  return <StyledHeader columns={columns}>{children}</StyledHeader>;
};

const Row = ({ children, role }) => {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role={role} columns={columns}>
      {children}
    </StyledRow>
  );
};

const Body = ({ data, render }) => {
  if (!data?.length) return <Empty>No data to show at the moment</Empty>;
  //TODO create create custom row for data
  return (
    <StyledBody>
      {data.map((car) => (
        <Table.Row role="row">
          <div>{car.make}</div>
          <div>{car.model}</div>
          <div>{car.year}</div>
          <div>{car.color}</div>
          <div>{car.mileage}</div>
          <div>{car.rental_rate}</div>
        </Table.Row>
      ))}
    </StyledBody>
  );
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
