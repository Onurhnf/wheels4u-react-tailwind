import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

import Select from "react-select";
import Form from "../ui/Form.jsx";
import FormRow from "../ui/FormRow.jsx";
import Button from "../ui/Button.jsx";
import { useCreateBooking } from "./hooks/useCreateBooking.js";
import { useCrm } from "../crm/hooks/useCrm.js";
import Modal from "../ui/Modal.jsx";
import VehiclesPage from "../../pages/VehiclesPage.jsx";

import { FiCheckCircle, FiXCircle } from "react-icons/fi";

function CreateBookingForm({ onCloseModal }) {
  const { users } = useCrm();

  const [, setSearchParams] = useSearchParams();
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [isPaid, setIsPaid] = useState(false);
  const { isCreating, createBooking } = useCreateBooking();

  const isWorking = isCreating;

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState,
    setValue,
    control,
  } = useForm();
  const { errors } = formState;

  useEffect(() => {
    setValue("vehicle_id", selectedVehicle);
  }, [selectedVehicle, setValue]);

  useEffect(() => {
    setSearchParams({});
    return () => {
      setSearchParams({});
      document.title = "Bookings - Wheels 4U";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onSubmit(data) {
    const formData = {
      ...data,
      user_id: data.user_id.value,
    };
    createBooking(
      { ...formData },
      {
        onSuccess: (formData) => {
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
      type={onCloseModal ? "modal" : "default"}
    >
      <FormRow
        variant="horizontal"
        label="Booker email"
        error={errors?.user_id?.message}
      >
        <Controller
          name="user_id"
          control={control}
          rules={{ required: "User must be selected" }}
          render={({ field }) => (
            <Select
              id="user_id"
              isSearchable
              isClearable
              className=" text-xs font-semibold  tracking-wide disabled:cursor-not-allowed "
              options={users?.map((user) => ({
                value: user.id,
                label: user.email,
              }))}
              isDisabled={isWorking}
              {...field}
            />
          )}
        />
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
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            disabled={isWorking}
            {...register("isPaid", {})}
            onChange={(e) => setIsPaid(e.target.checked)}
          />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-emerald-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-emerald-200 dark:peer-focus:ring-emerald-800"></div>

          {isPaid ? (
            <>
              <FiCheckCircle className="ml-3 font-semibold text-emerald-600" />
              <span className="ml-3 text-sm font-medium text-emerald-500">
                Paid
              </span>
            </>
          ) : (
            <>
              <FiXCircle className="ml-3 font-semibold text-red-300" />
              <span className="ml-3 text-sm font-medium text-red-200">
                Not Paid
              </span>
            </>
          )}
        </label>
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
          {"Create new Booking"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateBookingForm;
