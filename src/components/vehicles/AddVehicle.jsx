import Modal from "../ui/Modal.jsx";
import Button from "../ui/Button.jsx";

function AddVehicle() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button variant={"small"}>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          {/* <CreateCabinForm /> */}
          <div>asdasd</div>
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddVehicle;
