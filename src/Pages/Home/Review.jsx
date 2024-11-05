import { Modal } from "flowbite-react";
import { useContext, useState, useEffect } from "react";
import {
  MdOutlineCancel,
  MdOutlineStarHalf,
  MdOutlineStarPurple500,
} from "react-icons/md";
import { Textarea } from "flowbite-react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";

const Review = ({ roomDetails }) => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);
  const { _id } = roomDetails || {};
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    bookData();
  }, []);

  const bookData = async () => {
    try {
      const response = await fetch("http://localhost:5000/bookings", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setBooked(data);
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };

  const hasBooked = booked.some(
    (book) => book.room_type === roomDetails.room_type
  );
  console.log(hasBooked);

  const handleReview = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = user?.displayName;
    const rating = form.rating.value;
    const comment = form.comment.value;
    const roomId = _id;
    const timeStamp = new Date().toISOString();
    const photo = user?.photoURL;

    const reviews = {
      name,
      rating,
      comment,
      roomId,
      timeStamp,
      photo,
    };

    // if (!hasBooked) {
    //   return toast.error("You can only review rooms you have booked");
    // }

    try {
      const response = await fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviews),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      setShowModal(false);
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  return (
    <div className="mt-12">
      {" "}
      {/* Adjusted margin-top to mt-12 or removed */}
      <div className="flex gap-8">
        <div>
          <h5 className="text-xl text-primaryColor">Rating & Reviews :</h5>
          <div className="flex items-center gap-4 my-4">
            <h4 className="text-2xl font-bold text-primaryColor">5.00</h4>
            <p className="text-yellow-300 text-2xl flex items-center gap-1">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarHalf />
            </p>
            <p className="bg-yellow-300 text-white py-1 px-2">Awesome</p>
          </div>
        </div>
        <div className="border-l-2 border-primaryColor pl-20">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-2">
              <h4 className="text-xl font-medium text-primaryColor">
                {rating}.00
              </h4>
              <progress
                className="progress progress-warning w-56"
                value={rating * 20}
                max="100"
              ></progress>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button
          onClick={() => setShowModal(true)}
          className="text-xl py-3 px-4 shadow-xl text-primaryColor font-bold my-6"
        >
          Write Your Review Here
        </button>
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          className="p-8"
          style={{ maxWidth: "400px", width: "90%", height: "auto" }}
        >
          <button
            onClick={() => setShowModal(false)}
            className="flex justify-end pr-6 text-3xl"
          >
            <MdOutlineCancel />
          </button>
          <h2 className="text-xl mt-8 font-medium text-center">
            What You Feel About Us <br /> Write Here Freely
          </h2>

          <form onSubmit={handleReview}>
            <div className="rating mt-4 flex justify-center mx-auto">
              {[1, 2, 3, 4, 5].map((rating) => (
                <input
                  key={rating}
                  type="radio"
                  value={rating}
                  name="rating"
                  className="mask mask-star-2 bg-orange-400"
                />
              ))}
            </div>
            <div className="mt-5">
              <input
                value={user?.displayName}
                type="text"
                name="name"
                id="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 mx-auto p-2.5"
                placeholder="User name"
                required
                readOnly
              />
            </div>
            <Textarea
              className="textarea w-3/4 mx-auto mt-5"
              placeholder="Write something..."
              name="comment"
            />
            <button
              type="submit"
              className="btn mt-8 flex justify-center  w-[230px] mb-8 mx-auto bg-primaryColor text-white"
            >
              Save
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Review;
