import Image from "next/image";
import Product from "../Product/Product";

const todaysDeal = [
  {
    name: "Cake",
    id: 1,
    category: "Bakery",
    oldPrice: 100,
    price: 95,
    description:
      "This is the cake made by the Britaniya company which is delicious to eat and easy to enjoy anywhere.",
    image: "/todaysdeal/britaniyacake.png",
    campanyName: "Britaniya",
  },
  {
    name: "Shampoo",
    id: 2,
    category: "Beauty & personal Care",
    oldPrice: 150,
    price: 100,
    description: "Shampoo for long, thick and strong hair.",
    image: "/todaysdeal/clinicplus.png",
    campanyName: "Clicnicplus",
  },
  {
    name: "Toothbrush",
    id: 3,
    category: "Beauty & personal care",
    price: 95,
    description: "Doctors recommended toothpaste with salt in it",
    image: "/todaysdeal/colgate.png",
    campanyName: "Colgate",
  },
  {
    name: "Fair and Lovely",
    id: 4,
    category: "Beauty & personal care",
    oldPrice: 110,
    price: 100,
    description: "Beauty cream to glow your skin",
    image: "/todaysdeal/fairandlovely.png",
    campanyName: "Fair and Lovely",
  },
  {
    name: "GoodDay",
    id: 5,
    category: "Bakery",
    oldPrice: 30,
    price: 25,
    description: "Tasty snacks to make your day good",
    image: "/todaysdeal/goodday.png",
    campanyName: "Britaniya",
  },
  {
    name: "Harpic",
    id: 6,
    category: "Home Care",
    oldPrice: 150,
    price: 130,
    description: "Harpic helps you to keep your house hygnic",
    image: "/todaysdeal/harpic.png",
    campanyName: "Husain",
  },
  {
    name: "Horlics",
    id: 7,
    category: "Child Care",
    price: 110,
    description:
      "Horlics helps to develop the physical and mental health of your child",
    image: "/todaysdeal/horlics.png",
    campanyName: "Britaniya",
  },
  {
    name: "Safety",
    id: 8,
    category: "Beauty & personale Care",
    oldPrice: 45,
    price: 30,
    description: "Keep Hygnic",
    image: "/todaysdeal/sanaterypad.png",
    campanyName: "Safety",
  },
  {
    name: "Setwet Gel",
    id: 9,
    category: "Beauty & personal care",
    oldPrice: 150,
    price: 110,
    description: "Stay handsome Stay sexy",
    image: "/todaysdeal/setwet.png",
    campanyName: "Setwet",
  },
  {
    name: "Strawberry Jam",
    id: 10,
    category: "Breakfast",
    oldPrice: 300,
    price: 280,
    description: "Healthy Jam to make your breakfast enjoyable",
    image: "/todaysdeal/strawberryjam.png",
    campanyName: "Montagee",
  },
  {
    name: "Tokla tea",
    id: 11,
    category: "Masala",
    oldPrice: 200,
    price: 130,
    description:
      "Great way to start your day is to start with a good cup of tea",
    image: "/todaysdeal/toklatea.png",
    campanyName: "Tokla",
  },
];

function TodaysDeal() {
  return (
    <div className="mt-3 md:mt-8 pb-14 bg-white p-4 rounded-lg shadow-md">
      <div>
        <p className="text-xs md:text-lg text-primary">For You</p>
        <h2 className="text-xl md:text-4xl font-semibold pb-2 md:pb-5">
          Today's Deal
        </h2>
      </div>

      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-2 md:p-4">
        {todaysDeal.map((todayDeal) => (
          <Product
            key={todayDeal.id}
            name={todayDeal.name}
            category={todayDeal.category}
            oldPrice={todayDeal.oldPrice}
            price={todayDeal.price}
            description={todayDeal.description}
            image={todayDeal.image}
            companyName={todayDeal.campanyName}
          />
        ))}
      </div>
    </div>
  );
}

export default TodaysDeal;
