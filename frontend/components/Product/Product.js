import Image from "next/image";
import Currency from "react-currency-formatter";
import Button from "@material-tailwind/react/Button";
import { ShoppingCartIcon } from "@heroicons/react/outline";

function Product({
  name,
  image,
  oldPrice,
  price,
  category,
  description,
  companyName,
}) {
  return (
    <div>
      {/* Desktop */}
      <div class="flex justify-center items-center rounded-lg">
        <div class="p-3 md:p-6 border bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
          <div className="pb-3">
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
                  <div className="line-through text-primary">
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

            <div className="items-center flex-grow ">
              <Button ripple="light" className="button mx-auto w-full">
                <ShoppingCartIcon className="h-5" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="hidden">
        <div class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center">
          <div class="bg-white rounded-lg mt-5">
            <img src={image} class="h-40 rounded-md" alt="" />
          </div>
          <div class="bg-white shadow-lg rounded-lg -mt-4 w-64">
            <div class="py-5 px-5">
              <span class="font-bold text-gray-800 text-lg">{name}</span>
              <div class="flex items-center justify-between">
                <div class="text-sm text-gray-600 font-light">
                  Size : Regular
                </div>
                <div class="text-2xl text-red-600 font-bold">$ 8.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
