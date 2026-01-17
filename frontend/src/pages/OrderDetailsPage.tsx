// phase 7.4: order details page

import { Link, useParams } from "react-router-dom";
import { useOrder } from "../hooks/useOrder";
import { OrderItemRow } from "../components/OrderItemRow";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";

export const OrderDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useOrder(id!);
  const [isConfirming, setIsConfirming] = useState(false);
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading order...</div>;
  }

  if (isError || !data) {
    return <div className="text-red-600">Failed to load order.</div>;
  }

  const total = data.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  // phase last
  const handleConfirmOrder = () => {
    setIsConfirming(true);

    setTimeout(() => {
      toast("✅ Your order is on the way!", {
        style: {
          background: "#000",
          color: "#fff",
          padding: "16px 20px",
          borderRadius: "12px",
        },
        iconTheme: {
          primary: "#22c55e",
          secondary: "#000",
        },
      });

      navigate("/products");
    }, 1500);
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Order #{data.id}</h2>
        <Link to="/products" className="text-primary font-medium">
          Back to products
        </Link>
      </div>

      <div className="bg-white rounded-xl border shadow-sm p-6">
        <p className="text-sm text-gray-500 mb-4">
          Created on {new Date(data.createdAt).toLocaleString()}
        </p>

        <div>
          {data.items.map((item) => (
            <OrderItemRow key={item.id} item={item} />
          ))}
        </div>

        <div className="flex justify-between items-center pt-4 text-lg font-semibold">
          <span>Total</span>
          <span>₹{total.toLocaleString()}</span>
        </div>
      </div>
      {/* phase last */}
      <button
        onClick={handleConfirmOrder}
        disabled={isConfirming}
        className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-medium disabled:opacity-50"
      >
        {isConfirming ? "Processing order..." : "Confirm & Place Order"}
      </button>
    </div>
  );
};
