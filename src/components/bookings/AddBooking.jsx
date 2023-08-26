import Modal from "../ui/Modal.jsx";
import Button from "../ui/Button.jsx";
import CreateBookingForm from "./CreateBookingForm.jsx";

function AddBooking() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="booking-form">
          <Button variant={"small"}>New booking</Button>
        </Modal.Open>
        <Modal.Window name="booking-form">
          <CreateBookingForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddBooking;
