// phase 6.1: order types

import type { Product } from "./product";

export interface OrderItemInput {
  productId: number;
  quantity: number;
}

export interface Order {
  id: number;
  createdAt: string;
}

// phase 7.1 : order types for ordering items
export interface OrderItem {
  id: number;
  quantity: number;
  product: Product;
}

export interface OrderDetails {
  id: number;
  createdAt: string;
  items: OrderItem[];
}
