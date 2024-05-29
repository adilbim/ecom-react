import { Product } from "../../api/product.types";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import AddToCartButton from "../../componenets/AddToCartButton";

type ProductItemProps = {
  product: Product;
};

export const ProductItem = ({ product }: ProductItemProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="relative cursor-pointer"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <div className="relative h-72 w-full overflow-hidden rounded-lg">
          <img
            src={product.image}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="relative mt-4">
          <h3
            title={product.title}
            className="text-sm font-medium text-gray-900 whitespace-nowrap overflow-hidden overflow-ellipsis"
          >
            {product.title}
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
        <AddToCartButton
          product={product}
          className="w-full relative flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
    </>
  );
};
