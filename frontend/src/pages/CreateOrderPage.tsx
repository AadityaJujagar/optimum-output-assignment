// phase 6.5: product order page

import { useNavigate } from "react-router-dom";
import { useCreateOrder } from "../hooks/useCreateOrder";
import { useProducts } from "../hooks/useProducts";
import { useState } from "react";
import { OrderProductRow } from "../components/OrderProductRow";

export const CreateOrderPage = () => {
  const { data: products, isLoading } = useProducts();
  const createOrderMutation = useCreateOrder();
  const navigate = useNavigate();

  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const handleCreateOrder = async () => {
    const items = Object.entries(quantities)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, q]) => q > 0)
      .map(([productId, q]) => ({
        productId: Number(productId),
        quantity: q,
      }));

    if (items.length === 0) return;

    const order = await createOrderMutation.mutateAsync(items);
    navigate(`/orders/${order.id}`);
  };

  if (isLoading) return <div>Loading products...</div>;

  return (
    <div className="space-y-6 max-w-3xl">
      <h2 className="text-2xl font-semibold">Create Order</h2>

      <div className="space-y-3">
        {products?.map((product) => (
          <OrderProductRow
            key={product.id}
            product={product}
            quantity={quantities[product.id] || 0}
            onChange={(q) =>
              setQuantities((prev) => ({
                ...prev,
                [product.id]: q,
              }))
            }
          />
        ))}
      </div>

      <button
        onClick={handleCreateOrder}
        disabled={createOrderMutation.isPending}
        className="bg-primary text-white px-6 py-3 rounded-lg font-medium disabled:opacity-50"
      >
        {createOrderMutation.isPending ? "Creating..." : "Place Order"}
      </button>

      {createOrderMutation.isError && (
        <p className="text-red-600">Failed to create order</p>
      )}
    </div>
  );
};
