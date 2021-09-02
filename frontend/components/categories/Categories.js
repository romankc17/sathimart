import Image from "next/image";

const categories = [
  {
    name: "Fruits & Vegetables",
    description: "Fresh Fruits and vegitables",
    image: "/categories/fruitsandvegis.jpeg",
  },
  {
    name: "Bakery and Eggs",
    description: "All bakery items",
    image: "/categories/bakeryandeggs.jpeg",
  },
  {
    name: "Food Grains",
    description: "All types of food grains",
    image: "/categories/foodgrains.jpeg",
  },
  {
    name: "Beverages",
    description: "All type of drinks",
    image: "/categories/breverage.jpeg",
  },
  {
    name: "Icecreams",
    description: "Variety of icecreams",
    image: "/categories/icecream.jpeg",
  },
  {
    name: "Masala & Oils",
    description: "Masala items",
    image: "/categories/masala.jpeg",
  },
  {
    name: "HomeCare & Fashion",
    description: "Cleaning & decoration",
    image: "/categories/homecare.jpeg",
  },
  {
    name: "Beauty & Personal Care",
    description: "Beauty Products",
    image: "/categories/beautyandpc.jpeg",
  },
];

function Categories() {
  return (
    <div className="flex flex-col mt-3 md:mt-8 bg-white p-4 rounded-xl ">
      <div>
        {/* <p className="text-xs md:text-sm text-primary">SHOP BY</p> */}
        <p className="text-xs md:text-lg text-primary">Shop By</p>
        <h2 className="text-xl md:text-4xl font-semibold pb-2 md:pb-5">
          Categories
        </h2>
      </div>

      {/* Desktop view */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105  transform duration-200 ease-out active:scale-90 transition">
            <div className="relative h-16 w-16">
              <Image
                className="relative h-full rounded-lg"
                layout="fill"
                src={category.image}
                alt={category.name}
              />
            </div>

            <div>
              <p>{category.name}</p>
              <p className="text-gray-500">{category.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex items-center overflow-scroll scrollbar-hide text-sm font-semibold space-x-12">
        {categories.map(({ image, name }) => (
          <button className="text-primary flex items-center bg-gray-100 pr-10 space-x-2 shadow-sm rounded-full font-semibold my-1 active:scale-90 transition duration-150">
            <img className="rounded-full h-12" src={image} alt="" />

            <p className="inline-flex whitespace-nowrap mr-3 pr-10">{name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
