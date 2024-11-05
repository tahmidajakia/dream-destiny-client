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

  console.log(roomDetails);
  const { room_image, room_type, description, availability, room_size } =
    roomDetails || {};

  return (
    <div>
      <div
        className="bg-no-repeat bg-center bg-cover p-72"
        style={{ backgroundImage: `url(${roomDetails.room_image})` }}
      ></div>

      <div className="mt-16 max-w-7xl mx-auto lg:flex justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-primaryColor text-3xl font-bold">
            {roomDetails.room_type}
          </h2>
          <p className="my-4">{roomDetails.room_size}/Enjoy Food With Family</p>
          <p className="mb-8">Status: {roomDetails.availability}</p>
          <Divider />
          <h2 className="text-primaryColor text-xl mt-6 font-medium">
            Overview
          </h2>
          <p className="mt-4 w-11/12">{roomDetails.description}</p>

          <h2 className="text-primaryColor text-xl mt-6 font-medium">
            Family-Friendly Amenities
          </h2>
          <div className="flex gap-6 my-6">
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

          <div className="max-w-7xl mt-36">
            <Review roomDetails={roomDetails}></Review>
            <DisplayComment roomDetails={roomDetails}></DisplayComment>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-4 max-w-4xl">
          <BookNow roomDetails={roomDetails}></BookNow>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
