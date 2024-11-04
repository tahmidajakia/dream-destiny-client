import React from "react";
import { Link } from "react-router-dom";

const FeaturedCard = ({ item }) => {
  const {
    room_type,
    description,
    price_per_night,
    room_size,
    availability,
    room_image,
    special_offers,
    featured,
    _id
  } = item;

  return (
    <div className="card bg-base-100 w-96 shadow-xl flex flex-row items-center p-4">
      {/* Image Section */}
      <figure className="w-1/3">
        <img className="h-[150px] w-full rounded-lg object-cover" src={room_image} alt={room_type} />
      </figure>
      
      {/* Content Section */}
      <div className="w-2/3 flex flex-col justify-between p-4">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {room_type}
        </h5>
        <p title={description} className="font-normal text-gray-700 dark:text-gray-400">
          {description.substring(0, 50)}...
        </p>
        <Link to={`/room-details/${_id}`}>
          <button className="bg-primaryColor mt-2 w-full rounded-lg py-1 text-white">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCard;
