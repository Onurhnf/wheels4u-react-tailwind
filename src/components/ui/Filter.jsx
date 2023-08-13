import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <div
      role="group"
      className="flex gap-1 rounded-md border border-gray-100  bg-white p-1 shadow-sm"
    >
      {options.map((option) => (
        <button
          className={
            "rounded-md border px-2 py-1 text-base font-medium transition-all duration-300 hover:bg-emerald-500 hover:text-gray-50 disabled:border-none  disabled:bg-emerald-500 disabled:text-gray-50 "
          }
          disabled={option.value === currentFilter}
          key={option.value}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
