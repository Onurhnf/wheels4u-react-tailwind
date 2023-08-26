import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditVehicle } from "../../../services/vehicles.service.js";

export function useEditVehicle() {
  const queryClient = useQueryClient();

  const { mutate: editVehicle, isLoading: isEditing } = useMutation({
    mutationFn: ({ newVehicleData, id }) =>
      createEditVehicle(newVehicleData, id),
    onSuccess: () => {
      toast.success("Vehicle successfully edited");
      queryClient.invalidateQueries({ queryKey: ["vehicles"] });
    },
    onError: () => toast.error("Wheel could not be edited."),
  });

  return { isEditing, editVehicle };
}
