import Table from "../ui/Table.jsx";
import Modal from "../ui/Modal.jsx";
import { HiPencil, HiTrash } from "react-icons/hi2";
import CreateEditVehicleForm from "./CreateEditVehicleForm.jsx";
import Menu from "../ui/Menu.jsx";
import DeleteConfirmer from "../ui/DeleteConfirmer.jsx";
import { useDeleteVehicle } from "./hooks/useDeleteVehicle.js";
import Button from "../ui/Button.jsx";

function VehichleRow({
  vehicle,
  chooseable,
  setSelectedVehicle,
  onCloseModal,
}) {
  const { isDeleting, deleteVehicle } = useDeleteVehicle();

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
      <div className=" font-semibold uppercase text-gray-600">
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
      {!chooseable ? (
        <div>
          <Modal>
            <div className="flex items-center  justify-end">
              <Menu.Toggle id={vehicleId} />

              <Menu.List id={vehicleId}>
                <Modal.Open opens="edit">
                  <Menu.Button icon={<HiPencil className="text-emerald-600" />}>
                    Edit
                  </Menu.Button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <Menu.Button icon={<HiTrash className="text-emerald-600" />}>
                    Delete
                  </Menu.Button>
                </Modal.Open>
              </Menu.List>

              <Modal.Window name="edit">
                <CreateEditVehicleForm vehicleToEdit={vehicle} />
              </Modal.Window>

              <Modal.Window name="delete">
                <DeleteConfirmer
                  type="wheel"
                  disabled={isDeleting}
                  onConfirm={() => deleteVehicle(vehicleId)}
                />
              </Modal.Window>
            </div>
          </Modal>
        </div>
      ) : (
        <Button
          variant={"small"}
          onClick={() => {
            setSelectedVehicle(vehicleId);
            onCloseModal();
          }}
        >
          Choose
        </Button>
      )}
    </Table.Row>
  );
}

export default VehichleRow;
