// Slider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Import images for the slides
import bg1 from "../../assets/image/bg-2-V0gnp_kB.jpeg";
import bg2 from "../../assets/image/bg-3-DBLUaLYw.jpg";
import bg3 from "../../assets/image/bg-4-DkHoShzW.jpg";
import bg4 from "../../assets/image/bg-5-Bs-o5i2X.jpg";

// Slider Component
const Slider = () => {
  const Banner = ({ image, text, description }) => {
    return (
      <div
        className="h-[600px] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(#0f0c29BA ,#302b638A,#24243e4D), url(${image})`,
        }}
      >
        <div className="flex flex-col items-center justify-center h-full text-white text-center p-6">
          <h1 className="font-inter text-5xl font-bold leading-snug">{text}</h1>
          <p className="mt-4 lg:w-1/3 text-[#f6f6f6]">{description}</p>
          <div className="flex gap-6 justify-center lg:justify-start mt-6">
            <div className="flex gap-6 justify-center lg:justify-start mt-6">
              <button className="bg-blue-950 rounded-md text-white py-2 px-4 text-2xl shadow-xl">
                Register Now
              </button>
              <button className="bg-blue-950 rounded-md text-white py-2 px-4 text-2xl shadow-xl">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <Swiper
        effect={"fade"}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[EffectFade, Navigation, Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Banner
            image={bg1}
            text="Welcome to Paradise"
            description="Experience luxury like never before. Our resorts offer breathtaking views and top-notch services to ensure your stay is nothing short of perfect. Enjoy exquisite dining options and relaxation like you've never experienced."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            image={bg2}
            text="Your Dream Vacation"
            description="Explore beautiful destinations with us. From sandy beaches to majestic mountains, every trip is designed to create unforgettable memories. Join us for tailored experiences that cater to your every need."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            image={bg3}
            text="Adventure Awaits"
            description="Join us for unforgettable experiences. Whether you're seeking thrilling outdoor activities or serene relaxation, we have the perfect itinerary just for you. Let's embark on a journey filled with excitement and joy."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            image={bg4}
            text="Relax and Unwind"
            description="Find peace in our serene resorts. Recharge your mind and body with our wellness programs, or simply enjoy a quiet day by the pool. Your perfect escape is just a reservation away."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
