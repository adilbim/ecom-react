import { Product } from "../../api/product.types";
import { addToCart } from "../../api/db";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

type ProductItemProps = {
  product: Product;
};

export const ProductItem = ({ product }: ProductItemProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative cursor-pointer" onClick={() => navigate(`/products/${product.id}`)}>
        <div className="relative h-72 w-full overflow-hidden rounded-lg">
          <img
            src={product.image}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="relative mt-4">
          <h3
            title={product.title}
            className="text-sm font-medium text-gray-900"
          >
            {_.truncate(product.title, { length: 35, omission: "..." })}
          </h3>
        </div>
        <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
          />
          <p className="relative text-lg font-semibold text-white">
            ${product.price}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={() => addToCart(product)}
          type="button"
          className="w-full relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:bg-gray-400"
        >
          Add to bag
        </button>
      </div>
    </>
  );
};
