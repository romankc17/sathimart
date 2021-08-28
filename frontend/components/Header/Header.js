import {
  ShoppingCartIcon,
  UserIcon,
  SearchIcon,
  HeartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div className="flex items-center pt-2">
      {/* logo */}
      <div>
        <img loading="lazy" src="logo/logo.png" alt="" />
      </div>

      {/* middle */}
      <div className="flex flex-grow items-center md:border-2 rounded-2xl py-2 md:shadow-sm px-5">
        <input
          className="pl-5 bg-transparen outline-none ml-2 flex-grow text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex mr-8 ml-8 space-x-3">
        <ShoppingCartIcon className="h-6" />
        <UserIcon className="h-6" />
        <HeartIcon className="h-6" />
      </div>
    </div>
  );
}

export default Header;
