import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteVehicle as deleteVehicleApi } from "./../../../services/vehicles.service.js";

export function useDeleteVehicle() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteVehicle } = useMutation({
    mutationFn: deleteVehicleApi,
    onSuccess: () => {
      toast.success("Wheel Successfully Deleted");

      queryClient.invalidateQueries({
        queryKey: ["vehicles"],
      });
    },
    onError: () => toast.error("Wheel Could not be Deleted."),
  });

  return { isDeleting, deleteVehicle };
}
