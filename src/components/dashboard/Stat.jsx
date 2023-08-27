function Stat({ icon, title, value, color }) {
  const base =
    "row-span-full flex aspect-auto items-center justify-center rounded-full ";

  const style = {
    blue: base + "bg-sky-200 text-sky-700",
    green: base + "bg-emerald-200 text-emerald-700",
    yellow: base + "bg-yellow-200 text-yellow-700",
  };

  return (
    <div className="grid grid-cols-[4rem_1fr] grid-rows-[auto_auto] gap-x-5 gap-y-1 rounded-lg border border-gray-200 bg-white p-4 shadow-none hover:shadow-md">
      <div className={style[color]}>{icon}</div>
      <h5 className="self-end text-base font-semibold uppercase">{title}</h5>
      <p className="text-2xl font-medium">{value}</p>
    </div>
  );
}

export default Stat;
