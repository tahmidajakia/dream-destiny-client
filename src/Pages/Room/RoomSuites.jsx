import { Link } from "react-router-dom";


const RoomSuites = ({ room }) => {
    const {_id, room_image, room_type, description, price_per_night, } = room || {}
    return (
        <div className="">

            <Link to={`/room-details/${_id}`}>
                <div className=" max-w-lg h-96 sm:h-72 relative">
                    <img className="h-[350px] sm:h-72  " src={room_image} alt="Shoes" />
                    <div className='absolute h-[350px] sm:h-72  flex items-center top-0 left-0  
                    bg-black bg-opacity-35'>
                        <div className="text-white">
                            <p className=" rounded-xl py-1 w-1/3 bg-white text-primaryColor absolute top-2 left-1">${price_per_night}/Night</p>

                            <h2 className="mt-36 text-2xl font-semibold font-inter ">{room_type} </h2>
                            <p title={description} className=" w-3/4 mx-auto sm:w-full animate__animated  hover:animate__backInUp font-normal text-gray-50">
                                {description.substring(0, 70)}...
                            </p>


                        </div>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default RoomSuites;