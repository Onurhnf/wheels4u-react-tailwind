import Table from "../ui/Table.jsx";

function VehichleRow({ vehicle }) {
  const {
    id: vehicleId,
    vehicle_type,
    make,
    model,
    year,
    color,
    mileage,
    rental_rate,
  } = vehicle;

  return (
    <Table.Row>
      <div className="border-r-2 border-stone-500 text-xl font-semibold uppercase">
        {vehicle_type /*TODO make this icon */}
      </div>
      <div className="text-2xl font-semibold capitalize text-gray-600">
        {make}
      </div>
      <div className="text-2xl font-semibold capitalize text-gray-600">
        {model}
      </div>
      <div className="font-semibold capitalize">{year}</div>
      <div className="font-semibold capitalize">{color}</div>
      <div className="font-semibold capitalize">{mileage} km</div>
      <div className="font-semibold capitalize">{rental_rate}₺</div>
    </Table.Row>
  );
}

export default VehichleRow;
