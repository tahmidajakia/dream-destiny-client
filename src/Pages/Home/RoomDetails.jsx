import { Divider } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import swim from "../../assets/image/swimming-pool-DBRe7vi2.png";
import crib from "../../assets/image/baby-crib-D3IsMFgP.png";
import washing from "../../assets/image/washing-machine-BOSagHmm.png";
import BookNow from "./BookNow";
import Review from "./Review";
import DisplayComment from "./DisplayComment";

const RoomDetails = () => {
  const roomDetails = useLoaderData();
  const { room_image, room_type, description, availability, room_size } =
    roomDetails || {};

  return (
    <div>
      <div
        className="bg-no-repeat bg-center bg-cover p-24 md:p-48 lg:p-72"
        style={{ backgroundImage: `url(${room_image})` }}
      ></div>

      <div className="mt-10 lg:mt-16 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-6 px-4 sm:px-6">
        <div className="flex-1">
          <h2 className="text-primaryColor text-3xl font-bold">{room_type}</h2>
          <p className="my-2 lg:my-4">{room_size}/Enjoy Food With Family</p>
          <p className="mb-4 lg:mb-8">Status: {availability}</p>
          <Divider />
          
          <h2 className="text-primaryColor text-xl mt-4 lg:mt-6 font-medium">Overview</h2>
          <p className="mt-2 lg:mt-4 w-full lg:w-11/12">{description}</p>

          <h2 className="text-primaryColor text-xl mt-4 lg:mt-6 font-medium">
            Family-Friendly Amenities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 lg:gap-6 my-4 lg:my-6">
            <div className="bg-gray-100 rounded-lg border">
              <p className="flex items-center gap-4 py-4 px-6">
                <img className="w-10 h-10" src={swim} alt="Kids Swimming Pool" />
                Kids Swimming Pool
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg border">
              <p className="flex items-center gap-4 py-4 px-6">
                <img className="w-10 h-10" src={crib} alt="Baby Crib" />
                Baby Crib
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg border">
              <p className="flex items-center gap-4 py-4 px-6">
                <img className="w-10 h-10" src={washing} alt="Washing Machine" />
                Washing Machine
              </p>
            </div>
          </div>

          <div className="mt-16 lg:mt-36">
            <Review roomDetails={roomDetails}></Review>
            <DisplayComment roomDetails={roomDetails}></DisplayComment>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-4 lg:p-6 mt-8 lg:mt-0 max-w-full lg:max-w-4xl">
          <BookNow roomDetails={roomDetails}></BookNow>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
