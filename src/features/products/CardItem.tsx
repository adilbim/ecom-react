import { removeFromCart, updateProductCount } from "../../api/db";
import { Product } from "../../api/product.types";

type CardItemProps = {
  product: Product;
};

export const CardItem = ({ product }: CardItemProps) => {
  return (
    <>
      <div className="flex-shrink-0">
        <img
          src={product.image}
          className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
        />
      </div>

      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div>
          <div className="flex justify-between sm:grid sm:grid-cols-2">
            <div className="pr-6">
              <h3 className="text-sm">
                <span className="font-medium text-gray-700 hover:text-gray-800">
                  {product.title}
                </span>
              </h3>
            </div>

            <p className="text-right text-sm font-medium text-gray-900">
              {product.price}
            </p>
          </div>

          <div className="mt-4 flex items-center sm:absolute sm:left-1/2 sm:top-0 sm:mt-0 sm:block">
            <label htmlFor={`${product.id}`} className="sr-only">
              Quantity, {product.title}
            </label>
            <input
              className="block w-12 rounded-md border border-gray-300 px-1.5 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              type="number"
              name={`${product.id}`}
              id={`${product.id}`}
              value={product.count}
              min={1}
              onChange={(e) => updateProductCount(product.id, +e.target.value)}
            />
            <button
              onClick={() => removeFromCart(product.id)}
              type="button"
              className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
            >
              <span>Remove</span>
            </button>
          </div>
        </div>

        <p className="mt-4 flex space-x-2 text-sm text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5 flex-shrink-0 text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <span className="text-orange-300">Ships in</span>

          <span>3-4 weeks</span>
        </p>
      </div>
    </>
  );
};
