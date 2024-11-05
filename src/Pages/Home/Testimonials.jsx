import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000/reviews", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="font-inter max-w-7xl mx-auto mt-14">
      <h1 className="text-4xl mb-10 font-bold text-primaryColor dark:text-white my-6">
        What People Say About Us
      </h1>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="p-4"> {/* Add padding here to create space between cards */}
            <div
              className="shadow-xl rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 duration-300 ease-in-out h-full"
              style={{ height: "350px" }}
            >
              {/* Image section with dark blue background */}
              <div className="bg-primaryColor flex justify-center py-10">
                <img
                  src={review.avatar || "https://via.placeholder.com/80"}
                  alt="User avatar"
                  className="w-20 h-20 rounded-full object-cover border-4 border-white"
                />
              </div>

              {/* Name and review section with white background */}
              <div className="bg-white p-8 text-center h-full">
                <h3 className="text-lg font-semibold text-blue-900">
                  {review.name}
                </h3>
                <p className="text-gray-700 italic mt-2">"{review.comment}"</p>

                {/* Rating section */}
                <div className="flex justify-center mt-4">
                  <span className="text-yellow-500">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </span>
                  <span className="ml-2 text-gray-500 text-sm">
                    {review.rating} / 5
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
