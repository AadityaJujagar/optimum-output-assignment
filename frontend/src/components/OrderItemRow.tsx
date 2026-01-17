// phase 7.3: order item row component

import type { OrderItem } from "../types/order";

interface Props {
  item: OrderItem;
}

export const OrderItemRow = ({ item }: Props) => {
  const subTotal = item.product.price * item.quantity;

  return (
    <div className="flex justify-between items-center py-3 border-b">
      <div>
        <p className="font-medium">{item.product.name}</p>
        <p className="text-sm text-gray-500">
          ₹{item.product.price} x {item.quantity}
        </p>
      </div>

      <p className="font-medium">₹{subTotal.toLocaleString()}</p>
    </div>
  );
};
