import { useParams } from "react-router-dom";
import { Product } from "../api/product.types";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/products";
import { ProductOverviewItem } from "../features/products/ProductOverviewItem";

export default function ProductOverview() {
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useQuery<Product>({
    queryKey: ["products", productId],
    queryFn: () => getProductById(Number(productId)),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white">
      <ProductOverviewItem product={product} />
    </div>
  );
}
