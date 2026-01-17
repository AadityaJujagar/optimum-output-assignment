// phase 5.2: fetch products api

import type { Product } from "../types/product";
import api from "./axios";

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await api.get<Product[]>("/products");
  return res.data;
};
