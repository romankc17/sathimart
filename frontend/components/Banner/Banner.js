import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageSrc = [
  {
    src: "banner/sathimart.jpeg",
  },
  {
    src: "banner/foodanddrinks.jpeg",
  },
  {
    src: "banner/bakery.jpeg",
  },
  {
    src: "banner/fruits.jpeg",
  },
];

function Banner() {
  return (
    <div className="relative">
      {/* <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" /> */}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {imageSrc.map((img) => (
          <div className="mt-2">
            <img className="rounded-xl" src={img.src} loading="lazy" alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
