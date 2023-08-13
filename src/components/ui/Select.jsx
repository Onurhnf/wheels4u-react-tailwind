function Select({ options, value, onChange }) {
  return (
    <select
      className=" rounded-sm border border-gray-100 bg-white px-3 py-2 text-base font-medium shadow-sm"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
