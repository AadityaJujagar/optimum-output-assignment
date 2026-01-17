// phase 5.3: product query hook

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/product.api";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
