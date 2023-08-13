import { createContext, useContext } from "react";

const StyledTable = ({ children, role }) => (
  <div
    role={role}
    className="overflow-hidden rounded-md rounded-b-sm border border-gray-200 bg-white text-xl"
  >
    {children}
  </div>
);

const CommonRow = ({ columns, className, children, role = "row" }) => {
  const base = "grid items-center  transition-none " + className;

  const styles = {
    vehicleList: base + " grid-cols-[0.5fr_1fr_1fr_1fr_1fr_1fr_1fr_0.2fr]",
    bookingList: base + " grid-cols-7",
    crmList: base + " grid-cols-3",
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
    className="  border-b border-gray-100 bg-gray-100 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-gray-600"
  >
    {children}
  </CommonRow>
);

const StyledRow = ({ columns, children, role }) => (
  <CommonRow
    role={role}
    columns={columns}
    className=" border-b border-gray-100 bg-white px-6 py-3 text-sm first:mt-[-4px] last:mb-[-4px] last:border-b-0 hover:bg-stone-50"
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

  return <StyledBody>{data.map(render)}</StyledBody>;
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
