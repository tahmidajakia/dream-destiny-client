import useHotel from "../../hook/useHotel";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  const [hotel] = useHotel();

  const featuredRooms = hotel.filter(item => item.featured);
  console.log(featuredRooms);

  return (
    <div className="font-inter max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-16 md:mt-20 text-center md:text-left mb-20">
      <p className="text-base md:text-lg lg:text-xl text-primaryColor lg:w-2/5 mx-auto md:mx-0">
        ENJOY WORLD-CLASS STAY EXPERIENCE
      </p>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primaryColor dark:text-white mt-4 md:mt-6">
        Featured Rooms
      </h1>
      <p className="mt-4 text-sm md:text-base lg:text-lg text-primaryColor lg:w-1/2 mx-auto md:mx-0">
        Elevate your stay with our dreamy Destiny. Boasting modern design,
        expansive living spaces, and breathtaking city vistas, this penthouse
        suite offers the epitome of luxury living. Experience sophistication and
        comfort like never before.
      </p>
      
      {/* Render featured rooms */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-center">
        {featuredRooms.map(item => (
          <FeaturedCard
            key={item._id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
