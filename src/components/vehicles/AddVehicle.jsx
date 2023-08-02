import Modal from "../ui/Modal.jsx";
import Button from "../ui/Button.jsx";
import CreateVehicleForm from "./CreateVehicleForm.jsx";

function AddVehicle() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="vehicle-form">
          <Button variant={"small"}>Add new wheel</Button>
        </Modal.Open>
        <Modal.Window name="vehicle-form">
          <CreateVehicleForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddVehicle;
