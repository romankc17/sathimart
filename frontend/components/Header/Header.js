import {
  ShoppingCartIcon,
  UserIcon,
  SearchIcon,
  HeartIcon,
  LocationMarkerIcon,
  MenuIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div>
      {/* Web view */}
      <div className="hidden md:grid">
        <div className="p-4 flex items-center shadow-md space-x-5 cursor-pointer">
          {/* logo */}
          <div>
            <img
              className="object-contain h-12"
              src="logo/logo.png"
              alt="New Sathi Mart"
            />
          </div>

          {/* location */}
          <div className="flex space-x-2 items-center">
            <p className="text-sm text-gray-500">Delivery to</p>
            <LocationMarkerIcon className="h-6" />
            <p className="text-sm text-gray-700">Bhairahawa, Nepal</p>
          </div>

          {/* input field */}
          <div className="flex items-center flex-grow border rounded-lg h-12 focus-within:shadow-md">
            <input
              className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
              placeholder="What are you looking for?"
              type="text"
            />
            <button type="submit" hidden>
              search
            </button>
            <div className="bg-primary rounded-r-md h-full">
              <SearchIcon className="h-10 pl-3 pt-2 pr-2 pb-1 text-white rounded-full cursor-pointer md:mx-2" />
            </div>
          </div>

          {/* heading right */}
          <div className="flex items-center space-x-3">
            <HeartIcon className=" md:h-6" />
            <ShoppingCartIcon className="md:h-6" />
            <div className="bg-gray-200 rounded-full">
              <UserIcon className="md:h-6 m-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex flex-col p-3 md:hidden shadow-md">
        {/* top */}
        <div className="flex items-center justify-between">
          {/* top left */}
          <div className="flex items-center space-x-4">
            <MenuIcon className="h-6 text-primary" />
            <img
              className="object-contain h-10"
              src="logo/logo.png"
              alt="New Sathi Mart"
            />
          </div>

          {/* top right */}
          <div>
            <ShoppingCartIcon className="h-6" />
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center mt-4 border rounded-xl h-10 focus-within:shadow-md">
          <input
            className="ml-2 flex-grow text-sm text-gray-600 placeholder-gray-400 outline-none"
            placeholder="What are you looking for?"
            type="What are you looking for?"
          />
          <div className="bg-primary h-full rounded-r-md cursor-pointer">
            <SearchIcon className="h-8 bg-red-400 text-white rounded-full pl-3 pt-2 pr-2 pb-1 cursor-pointer md:mx-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
