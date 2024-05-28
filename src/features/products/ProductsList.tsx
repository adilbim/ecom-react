import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/products";
import { Product } from "../../api/product.types";
import { ProductsListSkeleton } from "../../ui/skeleton/ProductsListSkeleton";
import _ from "lodash";
import { ProductItem } from "./ProductItem";

export default function ProductList() {
  const { data : products, error, isLoading } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  if (isLoading) {
    return <ProductsListSkeleton />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bg-white">
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            Products
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products?.map((product : Product) => (
            <div key={product.id}>
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
