import { useLiveQuery } from "dexie-react-hooks";
import { getTotalCartItems } from "../api/db";
import { navigation } from "../constants/navigation";
import { classNames } from "../helpers/helpers";
import { CartButton } from "./cart/CartButton";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const numberOfCartItems = useLiveQuery(() => getTotalCartItems());
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <Link to="/" className="flex flex-shrink-0 items-center">
              <img
                className="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <img
                className="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </Link>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {/* Cart button */}
            <CartButton
              numberOfCartItems={numberOfCartItems as number}
              disabled={numberOfCartItems === 0}
            />
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            {/* Cart Mobile button */}
            <CartButton
              numberOfCartItems={numberOfCartItems as number}
              disabled={numberOfCartItems === 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
