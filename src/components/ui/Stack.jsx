const Stack = ({ type, children }) => {
  const base = "flex";

  const styles = {
    horizontal: base + " items-center justify-between",
    vertical: base + " flex-col gap-4",
  };
  return <div className={styles[type]}>{children}</div>;
};

Stack.defaultProps = {
  type: "vertical",
};

export default Stack;
