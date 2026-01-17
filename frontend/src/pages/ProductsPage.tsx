// phase 5.6: product page integrations

import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { ProductSkeleton } from "../components/ProductSkeleton";
import { ProductCard } from "../components/ProductCard";

export const ProductsPage = () => {
  const { data, isLoading, isError } = useProducts();

  if (isError) {
    return <div className="text-red-600">Failed to load products.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Products</h2>
        <Link
          to="/orders/new"
          className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          Create Order
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {isLoading &&
          Array.from({ length: 6 }).map((_, i) => <ProductSkeleton key={i} />)}

        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
