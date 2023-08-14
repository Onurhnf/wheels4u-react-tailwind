function Select({ options, value, onChange }) {
  return (
    <select
      className=" rounded-sm border border-gray-100 bg-white px-3 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring focus:ring-emerald-300"
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
