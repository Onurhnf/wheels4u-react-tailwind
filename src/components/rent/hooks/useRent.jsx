import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updateBooking } from "../../../services/bookings.service.js";

export function useRent() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: rent, isLoading: isRenting } = useMutation({
    mutationFn: ({ bookingId }) =>
      updateBooking(bookingId, {
        status: "picked-up",
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully rented`);
      queryClient.invalidateQueries({ active: true });
      navigate("/bookings");
    },

    onError: () => toast.error("There was an error while renting"),
  });

  return { rent, isRenting };
}
