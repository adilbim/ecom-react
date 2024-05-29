import { useLiveQuery } from "dexie-react-hooks";
import { isProductInCart, addToCart } from "../api/db";
import { Product } from "../api/product.types";

type AddToCartButtonProps = {
  product: Product;
  className?: string;
};

export default function AddToCartButton({
  product,
  className,
}: AddToCartButtonProps) {
  const isInCart = useLiveQuery(() => isProductInCart(product.id));
  return (
    <button
      disabled={isInCart}
      onClick={() => addToCart(product)}
      type="button"
      className={className}
    >
      Add to cart
    </button>
  );
}
