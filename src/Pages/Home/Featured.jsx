import useHotel from "../../hook/useHotel";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  const [hotel] = useHotel();

  const featuredRooms = hotel.filter(item => item.featured);
  console.log(featuredRooms);

  return (
    <div
      className="font-inter max-w-7xl lg:mx-auto md:mx-6 mt-20 md:text-left text-center
        xl:mb-[700px] lg:mb-[800px] md:mb-[1300px]  mb-[2700px]"
    >
      <p className="lg:w-2/5">ENJOY WORLD-CLASS STAY EXPERIENCE</p>
      <h1 className="text-5xl font-bold text-primaryColor dark:text-white my-6">
        Featured Rooms {featuredRooms.length}
      </h1>
      <p className="lg:w-1/2">
        Elevate your stay with our dreamy Destiny. Boasting modern design,
        expansive living spaces, and breathtaking city vistas, this penthouse
        suite offers the epitome of luxury living. Experience sophistication and
        comfort like never before.
      </p>
      
      {/* Render featured rooms */}
      <div className="grid h-56 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:h-64 xl:h-80 2xl:h-96 mt-10 mb-20">
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
