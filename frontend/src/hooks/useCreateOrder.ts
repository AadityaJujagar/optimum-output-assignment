// phase 6.3: order mutation hook

import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../api/order.api";

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: createOrder,
  });
};
