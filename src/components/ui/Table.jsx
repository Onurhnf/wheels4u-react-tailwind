import { createContext, useContext } from "react";

const StyledTable = ({ children, role }) => (
  <div
    role={role}
    className="overflow-hidden rounded-md border border-gray-200 text-xl"
  >
    {children}
  </div>
);

const CommonRow = ({ columns, className, children, role = "row" }) => {
  let style =
    `grid grid-cols-${columns} items-center gap-x-6 transition-none` +
    className;
  return (
    <div role={role} className={style}>
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
  if (!data.length) return <Empty>No data to show at the moment</Empty>;
  //TODO create create custom row for data
  return (
    <StyledBody>
      {data.map((booking) => (
        <Table.Row role="row">
          <div>{booking.endDate}</div>
          <div>{booking.endDate}</div>
          <div>{booking.endDate}</div>
          <div>{booking.endDate}</div>
          <div>{booking.endDate}</div>
          <div>{booking.endDate}</div>
          <div>{booking.endDate}</div>
          <div>{booking.endDate}</div>
          <div>{booking.endDate}</div>
          <div>{booking.endDate}</div>
          <div>{booking.endDate}</div>
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
