import Image from "next/image";
import Currency from "react-currency-formatter";
import Button from "@material-tailwind/react/Button";
import {
  ShoppingCartIcon,
  HeartIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

function Product({
  name,
  image,
  oldPrice,
  price,
  category,
  description,
  companyName,
}) {
  const [numberofItem, setNumberofItem] = useState(null);

  const addToBasket = () => {
    setNumberofItem(numberofItem + 1);
  };

  const addItem = () => {
    setNumberofItem(numberofItem + 1);
  };

  const removeItem = () => {
    setNumberofItem(numberofItem - 1);
  };

  return (
    <div>
      {/* Desktop */}
      <div class="flex justify-center items-center rounded-lg">
        <div class="p-2 md:p-6 border bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
          <div className="pb-3">
            <HeartIcon className="h-5 absolute top-2 left-2 text-xs italic cursor-pointer" />
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">
              {category}
            </p>
          </div>

          <div className="h-40 w-40">
            <img
              loading="lazy"
              className="object-cover rounded-t-md"
              src={image}
              alt=""
            />
          </div>

          <div class="mt-4">
            <div className="h-10">
              <h1 class="text-xl font-bold text-gray-700 whitespace-nowrap">
                {name}
              </h1>
            </div>

            <div className="h-10 ">
              <div className="text-xs">
                {oldPrice ? (
                  <div className="line-through text-gray-500">
                    <Currency
                      className="text-black"
                      currency="NPR"
                      quantity={oldPrice}
                    />
                  </div>
                ) : (
                  <div>&#160;</div>
                )}
              </div>

              <div className="font-semibold mx-auto mb-2 text-primary">
                <Currency currency="NPR" quantity={price} />
              </div>
            </div>

            {numberofItem ? (
              <div className="flex items-center w-full justify-between bg-gray-100 p-1 rounded-sm">
                <div>
                  <Button
                    onClick={removeItem}
                    ripple="light"
                    className="button mx-auto w-full"
                  >
                    <MinusIcon className="h-5" />
                  </Button>
                </div>
                <div>
                  <p>{numberofItem}</p>
                </div>
                <div>
                  <Button
                    onClick={addItem}
                    ripple="light"
                    className="button mx-auto w-full"
                  >
                    <PlusIcon className="h-5" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="p-1">
                <Button
                  onClick={addToBasket}
                  ripple="light"
                  className="button mx-auto w-full"
                >
                  <ShoppingCartIcon className="h-5" />
                  Add to Cart
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
