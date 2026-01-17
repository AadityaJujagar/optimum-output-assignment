// phase 6.2: creating order apis

import type { OrderItemInput } from "../types/order";
import api from "./axios";

export const createOrder = async (items: OrderItemInput[]) => {
  const res = await api.post("/orders", { items });
  return res.data;
};

export const fetchOrder = async (id: string) => {
  const res = await api.get(`/orders/${id}`);
  return res.data;
};
