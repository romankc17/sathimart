import Image from "next/image";

function CategoriesCard({ name, description, image }) {
  return (
    <div>
      <div className=" hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
          <div className="relative h-16 w-16">
            <Image
              className="relative h-full rounded-lg"
              layout="fill"
              src={image}
              alt={name}
            />
          </div>

          <div>
            <p>{name}</p>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>
      </div>

      <div className="md:hidden flex items-center overflow-scroll scrollbar-hide text-sm font-semibold space-x-12">
        <button className="text-primary flex items-center bg-gray-100 pr-10 space-x-2 shadow-sm rounded-full font-semibold my-1 active:scale-90 transition duration-150">
          <img className="rounded-full h-12" src={image} alt="" />

          <p className="inline-flex whitespace-nowrap mr-3 pr-10">{name}</p>
        </button>
      </div>
    </div>
  );
}

export default CategoriesCard;
