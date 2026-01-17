// phase 6.4: product row selector

import type { Product } from "../types/product";

interface Props {
  product: Product;
  quantity: number;
  onChange: (qty: number) => void;
}

export const OrderProductRow = ({ product, quantity, onChange }: Props) => {
  const disabled = product.stock === 0;

  return (
    <div className="flex items-center justify-between bg-white border rounded-lg p-4">
      <div>
        <p className="font-medium">{product.name}</p>
        <p className="text-sm text-gray-500">
          ₹{product.price} · Stock {product.stock}
        </p>
      </div>

      <input
        type="number"
        min={0}
        max={product.stock}
        value={quantity}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-20 border rounded px-2 py-1 text-center disabled:bg-gray-100"
      />
    </div>
  );
};
