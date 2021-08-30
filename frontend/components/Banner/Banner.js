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
        interval={5000000}
      >
        <div className="h-80">
          <img
            className="object-contain h-full"
            loading="lazy"
            src="banner/sathimart.jpeg"
            alt=""
          />
        </div>

        <div>
          <img
            className="object-contain h-full"
            loading="lazy"
            src="banner/welcomesathi.jpeg"
            alt=""
          />
        </div>

        <div>
          <img
            className="object-contain h-full"
            loading="lazy"
            src="banner/food.jpeg"
            alt=""
          />
        </div>

        <div>
          <img
            className="object-contain h-full"
            loading="lazy"
            src="banner/freedelivery.jpeg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
