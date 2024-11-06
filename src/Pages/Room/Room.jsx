import { useEffect, useState } from "react";
import bg from "../../assets/image/roombg-DpLlqSxB.jpg";
import bg1 from '../../assets/image/roombg2-LACPRRyf.jpg'
import RoomSuites from "./RoomSuites";

const Room = () => {
  const [rooms, setRooms] = useState([]);
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(500);
  const url = `http://localhost:5000/hotel?minPrice=${minPrice}&maxPrice=${maxPrice}`;

  useEffect(() => {
    getData();
  }, [minPrice, maxPrice]);

  const getData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setRooms(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  return (
    <div className=" xl:mb-[900px] lg:mb-[1000px] sm:mb-[1300px]">
      <div
        className="lg:p-32 p-24 bg-no-repeat bg-cover bg-center text-center text-white font-inter"
        style={{
          backgroundImage: `linear-gradient(#0f0c29BA ,#302b638A,#24243e4D) , url(${bg})`,
        }}
      >
        <h5>CHECK OUR ACCOMMODATIONS</h5>
        <h1 className="lg:text-6xl text-3xl mt-4 font-semibold ">
          Rooms, Suites & activities
        </h1>
      </div>

      <div className="text-center text-primaryColor font-inter mt-16">
        <h5>Welcome to our DreamyDestiny</h5>
        <h1 className="lg:text-5xl text-3xl font-bold leading-relaxed my-4 ">
          Enjoy Island Views from <br />
          Our Lovely Rooms{" "}
        </h1>
        <h5 className="md:w-3/5 w-3/4 mx-auto">
          Dreamy Destiny Beach Island Hotel offers a variety of lodging options
          for groups of all sizes. Whether you’re interested in accommodation in
          a corporate or family resort, a romantic room for two, or a
          self-contained cabin getaway, we’ve got the perfect accommodation for
          you. Our team is dedicated to providing service and accommodations
          that are as spectacular as the views.
        </h5>
        <div className="my-6 flex gap-4 justify-center">
          <a href="#activities">
            <button className="lg:text-xl border border-primaryColor py-2 px-4">
              Our Rooms & Suites
            </button>
          </a>
          <a href="#rooms">
            <button className="lg:text-xl border border-primaryColor py-2 px-4">
              Our Extra activities
            </button>
          </a>
        </div>
        <div
          className="lg:p-24 p-24 bg-no-repeat bg-cover bg-center text-center text-white font-inter"
          style={{
            backgroundImage: `linear-gradient(#0f0c29BA ,#302b638A,#24243e4D) , url(${bg1})`,
          }}
        >
          <h1 className="lg:text-4xl text-2xl mt-4 font-semibold ">
            Rooms & Suites
          </h1>
        </div>
        <div className="my-6 bg-white shadow-xl rounded-lg">
          <h5 className="text-primaryColor text-2xl font-bold my-6">Filter By Price</h5>
          <input
            className="rounded-lg border border-black mb-10 pl-5 pt-3 pb-3"
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            placeholder="Min Price"
          />
          <input
            className="rounded-lg border border-black mx-6 mb-10 pl-5 pt-3 pb-3"
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            placeholder="Max Price"
          />
        </div>
        <div className="max-w-7xl justify-center lg:mx-auto mx-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:h-64 xl:h-80 2xl:h-96 mt-10 mb-20">
          {rooms.map(room => <RoomSuites key={room._id} room={room} />)}
        </div>
      </div>
    </div>
  );
};

export default Room;
