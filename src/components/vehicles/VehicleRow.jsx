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
      <div className=" text-base font-semibold uppercase text-gray-600">
        {vehicle_type /*TODO (maybe) make this icon */}
      </div>
      <div className=" font-semibold capitalize ">{make}</div>
      <div className=" font-semibold capitalize ">{model}</div>
      <div className="font-semibold capitalize">{year}</div>
      <div className="font-semibold capitalize">{color}</div>
      <div className="font-semibold capitalize">
        {mileage ? mileage.toLocaleString() + " km" : `—`}
      </div>
      <div className="font-semibold capitalize">{rental_rate}₺</div>
    </Table.Row>
  );
}

export default VehichleRow;
