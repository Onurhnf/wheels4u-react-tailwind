import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateBooking } from "../../../services/bookings.service.js";

export function useRentReturn() {
  const queryClient = useQueryClient();

  const { mutate: rentReturn, isLoading: isRentReturning } = useMutation({
    mutationFn: ({ bookingId }) =>
      updateBooking(bookingId, {
        status: "returned",
        isPaid: true,
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully returned`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("There was an error while rent return."),
  });

  return { rentReturn, isRentReturning };
}
