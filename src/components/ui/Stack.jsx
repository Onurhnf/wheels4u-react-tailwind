const Stack = ({ type, children, className = "" }) => {
  const base = "flex";

  const styles = {
    horizontal: base + " items-center justify-between " + className,
    vertical: base + " flex-col gap-4 " + className,
  };
  return <div className={styles[type]}>{children}</div>;
};

Stack.defaultProps = {
  type: "vertical",
};

export default Stack;
