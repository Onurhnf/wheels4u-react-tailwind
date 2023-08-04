import { useForm } from "react-hook-form";
import { useCreateVehicle } from "./hooks/useCreateVehicle.js";
import { useEditVehicle } from "./hooks/useEditVehicle.js";
import Form from "../ui/Form.jsx";
import FormRow from "../ui/FormRow.jsx";
import Button from "../ui/Button.jsx";

function CreateEditVehicleForm({ vehicleToEdit = {}, onCloseModal }) {
  const { isCreating, createVehicle } = useCreateVehicle();
  const { isEditing, editVehicle } = useEditVehicle();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = vehicleToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

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
      createVehicle(
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
        label="Vehicle type"
        error={errors?.vehicle_type?.message}
      >
        <select
          id="vehicle_type"
          className="input pr-20"
          disabled={isWorking}
          {...register("vehicle_type", {
            required: "This field is required",
          })}
        >
          {/*TODO create a type enum*/}
          <option value={""}>Choose a type</option>
          <option value="bike">Bike</option>
          <option value="car">Car</option>
        </select>
      </FormRow>

      <FormRow variant="horizontal" label="Make" error={errors?.make?.message}>
        <input
          className="input"
          type="text"
          id="make"
          disabled={isWorking}
          {...register("make", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        variant="horizontal"
        label="Model"
        error={errors?.model?.message}
      >
        <input
          className="input"
          type="text"
          id="model"
          disabled={isWorking}
          {...register("model", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow variant="horizontal" label="Year" error={errors?.year?.message}>
        <input
          className="input"
          type="number"
          id="year"
          disabled={isWorking}
          defaultValue={1900}
          min={1900}
          max={2100}
          {...register("year", {
            required: "This field is required",
            valueAsNumber: true,
            min: {
              value: 1900,
              message: "It is not a valid year",
            },
            max: {
              value: 2100,
              message: "It is not a valid year",
            },
          })}
        />
      </FormRow>

      <FormRow
        variant="horizontal"
        label="Color"
        error={errors?.color?.message}
      >
        {/*TODO create a color enum (maybe)*/}
        <input
          className="input"
          type="text"
          id="color"
          disabled={isWorking}
          {...register("color", {
            required: "This field is required",
          })}
        />
      </FormRow>
      {/*TODO create a boolean for mileage if exist or not*/}
      <FormRow
        variant="horizontal"
        label="Mileage"
        error={errors?.mileage?.message}
      >
        <input
          className="input"
          type="number"
          id="mileage"
          disabled={isWorking}
          {...register("mileage", { valueAsNumber: true })}
        />
      </FormRow>

      <FormRow
        variant="horizontal"
        label="Rental Rate"
        error={errors?.rental_rate?.message}
      >
        <input
          className="input"
          type="number"
          id="rental_rate"
          disabled={isWorking}
          {...register("rental_rate", {
            required: "This field is required",
            valueAsNumber: true,
            min: {
              value: 0,
              message: "It is not a price",
            },
          })}
        />
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
          {isEditSession ? "Edit Wheel" : "Create new Wheel"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateEditVehicleForm;
