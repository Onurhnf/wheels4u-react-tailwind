import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditVehicle } from "../../../services/vehicles.service.js";

export function useCreateVehicle() {
  const queryClient = useQueryClient();

  const { mutate: createVehicle, isLoading: isCreating } = useMutation({
    mutationFn: createEditVehicle,
    onSuccess: () => {
      toast.success("New vehicle successfully created");
      queryClient.invalidateQueries({ queryKey: ["vehicles"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createVehicle };
}
