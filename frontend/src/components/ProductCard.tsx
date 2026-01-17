// phase 5.4: creating product cards

import type { Product } from "../types/product";

interface Props {
  product: Product;
}

export const ProductCard =({ product }: Props)=> {
  const inStock = product.stock > 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition">
      {/* Image */}
      <div className="aspect-video bg-gray-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://via.placeholder.com/400x300?text=No+Image";
          }}
        />
      </div>

      {/* Content */}
      <div className="p-3 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              inStock
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <p className="text-gray-600">₹{product.price.toLocaleString()}</p>

        <p className="text-sm text-gray-500">
          Stock: <span className="font-medium">{product.stock}</span>
        </p>
      </div>
    </div>
  );
}
