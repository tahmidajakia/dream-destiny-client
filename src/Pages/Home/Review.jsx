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
      setBooked(data);
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };

  const hasBooked = booked.some(
    (book) => book.room_type === roomDetails.room_type
  );

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

      setShowModal(false);
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };

  const openReviewModal = () => {
    if (!hasBooked) {
      toast.error("You need to book a room to leave a review.");
      return;
    }
    setShowModal(true);
  };

  return (
    <div className="mt-12 px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row gap-8">
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
            <p className="bg-yellow-300 text-white py-1 px-2 rounded-md">Awesome</p>
          </div>
        </div>
        <div className="border-l-2 border-primaryColor pl-4 lg:pl-20">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-2 mb-2">
              <h4 className="text-lg lg:text-xl font-medium text-primaryColor">
                {rating}.00
              </h4>
              <progress
                className="progress progress-warning w-full lg:w-56"
                value={rating * 20}
                max="100"
              ></progress>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={openReviewModal}
          className="text-lg lg:text-xl py-2 px-4 lg:py-3 lg:px-6 shadow-lg text-primaryColor font-bold my-6"
        >
          Write Your Review Here
        </button>
        <Modal
          show={showModal}
          onClose={() => setShowModal(false)}
          className="p-4 lg:p-8 mx-2 sm:mx-auto"
          style={{ maxWidth: "90%", width: "100%", maxWidth: "400px" }}
        >
          <div className="flex justify-end">
            <button
              onClick={() => setShowModal(false)}
              className="text-2xl lg:text-3xl"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <h2 className="text-lg lg:text-xl mt-4 lg:mt-8 font-medium text-center">
            What You Feel About Us <br /> Write Here Freely
          </h2>

          <form onSubmit={handleReview} className="mt-4 lg:mt-6">
            <div className="rating flex justify-center mx-auto gap-1 lg:gap-2">
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
            <div className="mt-4 lg:mt-5 w-3/4 mx-auto">
              <input
                value={user?.displayName}
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="User name"
                required
                readOnly
              />
            </div>
            <Textarea
              className="textarea w-3/4 mx-auto mt-5"
              placeholder="Write something..."
              name="comment"
              required
            />
            <button
              type="submit"
              className="btn ml-9 mb-3 mt-8 w-[180px] lg:w-[230px] mx-auto bg-primaryColor text-white"
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
