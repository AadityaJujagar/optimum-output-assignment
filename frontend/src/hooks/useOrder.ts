// phase 7.2: query hook for order

import { useQuery } from "@tanstack/react-query";
import { fetchOrder } from "../api/order.api";
import type { OrderDetails } from "../types/order";

export const useOrder = (id: string) => {
  return useQuery<OrderDetails>({
    queryKey: ["order", id],
    queryFn: () => fetchOrder(id),
    enabled: !!id,
  });
};
