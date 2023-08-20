import { useForm } from "react-hook-form";

import Form from "../ui/Form.jsx";
import FormRow from "../ui/FormRow.jsx";
import Button from "../ui/Button.jsx";
import { useCreateBooking } from "./hooks/useCreateBooking.js";
import { useEditVehicle } from "../vehicles/hooks/useEditVehicle.js";
import { useCrm } from "../crm/hooks/useCrm.js";
import Modal from "../ui/Modal.jsx";
import VehiclesPage from "../../pages/VehiclesPage.jsx";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function CreateEditBookingForm({ bookingToEdit = {}, onCloseModal }) {
  const { users } = useCrm();

  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const { isCreating, createBooking } = useCreateBooking();
  const { isEditing, editVehicle } = useEditVehicle();

  const isWorking = isCreating; //|| isEditing;
  const { id: editId, ...editValues } = bookingToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, getValues, reset, formState, setValue } =
    useForm({
      defaultValues: isEditSession ? editValues : {},
    });
  const { errors } = formState;

  useEffect(() => {
    setValue("vehicle_id", selectedVehicle);
  }, [selectedVehicle, setValue]);

  useEffect(() => {
    return () => {
      setSearchParams({});
    };
  }, []);

  function onSubmit(data) {
    if (isEditSession)
      editVehicle(
        { newVehicleData: { ...data }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        },
      );
    else
      createBooking(
        { ...data },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        },
      );
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow
        variant="horizontal"
        label="Booker email"
        error={errors?.user_id?.message}
      >
        <select
          id="user_id"
          className="input"
          disabled={isWorking}
          {...register("user_id", {
            required: "This field is required",
          })}
        >
          <option value={""}>Choose a user</option>
          {users?.map((user, i) => (
            <option key={i} value={user.id}>
              {user.email}
            </option>
          ))}
        </select>
      </FormRow>

      <FormRow
        variant="horizontal"
        label="Pickup Date"
        error={errors?.pickup_date?.message}
      >
        <input
          name="pickup_date"
          type="date"
          className="input"
          disabled={isWorking}
          {...register("pickup_date", {
            required: "Pickup Date is required",
          })}
        />
      </FormRow>

      <FormRow
        variant="horizontal"
        label="Return Date"
        error={errors?.return_date?.message}
      >
        <input
          name="return_date"
          type="date"
          className="input"
          disabled={isWorking}
          {...register("return_date", {
            required: "Return Date is required",
            validate: (value) =>
              value >= getValues().pickup_date ||
              "The return date cannot be earlier than the pickup date. ",
          })}
        />
      </FormRow>

      <FormRow
        variant="horizontal"
        label="Status"
        error={errors?.status?.message}
      >
        <select
          id="status"
          className="input"
          disabled={isWorking}
          {...register("status", {
            required: "Status is required",
          })}
        >
          <option value={""}>Choose a Status</option>
          <option value="unconfirmed">Unconfirmed</option>
          <option value="picked-up">Picked Up</option>
        </select>
      </FormRow>

      <FormRow
        variant="horizontal"
        label="Select a Wheel"
        error={errors?.vehicle_id?.message}
      >
        <>
          <Modal.Open opens="vehicles">
            <input
              id="vehicle_id"
              type="text"
              autoComplete="off"
              className="input select-none "
              placeholder="Click to choose a wheel"
              value={selectedVehicle}
              disabled={isWorking}
              {...register("vehicle_id", {
                required: "A Wheel must be selected",
              })}
            />
          </Modal.Open>
          <Modal.Window name="vehicles">
            <VehiclesPage
              chooseable={true}
              setSelectedVehicle={setSelectedVehicle}
            />
          </Modal.Window>
        </>
      </FormRow>
      <FormRow
        variant="horizontal"
        label="Is Paid?"
        error={errors?.isPaid?.message}
      >
        <label class="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            disabled={isWorking}
            {...register("isPaid", {})}
          />
          <div class="peer-focus:ring-blue-30 peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 dark:peer-focus:ring-blue-800"></div>
          <span class="ml-3 text-sm font-medium text-gray-900 ">
            Checked toggle
          </span>
        </label>
        {/* <input
          id="isPaid"
          type="checkbox"
          className="peer sr-only"
          disabled={isWorking}
          {...register("isPaid", {
            required: "A Wheel must be selected",
          })}
        /> */}
      </FormRow>

      <FormRow variant="horizontal">
        <Button
          variant="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button variant={"small"} disabled={isWorking}>
          {isEditSession ? "Edit Booking" : "Create new Booking"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateEditBookingForm;
