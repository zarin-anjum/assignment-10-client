import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Connecting Farmers & Buyers",
    description: "A digital platform that brings farmers, traders, and consumers together.",
    img: "/assets/s1.jpg",
  },
  {
    id: 2,
    title: "Showcase Your Crops Easily",
    description: "Post your crops with images, price, and details to reach potential buyers.",
    img: "/assets/s2.jpg",
  },
  {
    id: 3,
    title: "Discover Fresh Local Produce",
    description: "Browse crops from nearby farmers and get fresh produce directly.",
    img: "/assets/s3.webp",
  },
  {
    id: 4,
    title: "Fair Trade & Transparent Deals",
    description: "Farmers earn more while buyers get quality produce without middlemen.",
    img: "/assets/s4.jpg",
  }
];

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      className="w-full h-[400px] lg:h-[500px]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-full overflow-hidden">
            {/* Background Image */}
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full  object-fill"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-2xl lg:text-4xl font-bold mb-3 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-sm lg:text-lg max-w-lg drop-shadow-md">
                {slide.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
