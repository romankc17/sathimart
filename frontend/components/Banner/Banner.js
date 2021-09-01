import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="h-90">
          <img
            className=" h-full"
            loading="lazy"
            src="banner/sathimart.jpeg"
            alt=""
          />
        </div>

        <div>
          <img
            className="object-contain h-full"
            loading="lazy"
            src="banner/foodanddrinks.jpeg"
            alt=""
          />
        </div>

        <div>
          <img
            className="object-contain h-full"
            loading="lazy"
            src="banner/bakery.jpeg"
            alt=""
          />
        </div>

        <div>
          <img
            className="object-contain h-full"
            loading="lazy"
            src="banner/fruits.jpeg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
