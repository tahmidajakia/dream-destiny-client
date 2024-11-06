import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/image/about-DxOvL3qL.jpg";
import parts from "../../assets/image/407671.webp";

const AboutSection2 = () => {
  // Track dark mode status locally
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("theme") === "dark");

  // Update document theme and localStorage
  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  return (
    <div className="hero min-h-screen mt-10 px-4">
      <div className="hero-content flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 relative flex justify-center lg:justify-start">
          <img
            src={img1}
            className="w-3/4 h-[250px] md:h-[350px] lg:h-[400px] rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            className="w-2/3 absolute right-0 md:right-5 rounded-lg top-1/2 shadow-2xl transform -translate-y-1/2"
          />
        </div>
        <div className="lg:w-1/2 space-y-3 p-4 text-center lg:text-left">
          <h3 className={`font-bold text-lg md:text-xl ${isDarkMode ? "text-white" : "text-primaryColor"}`}>
            Stay in the heart of Saint Martin
          </h3>
          <h1 className={`text-2xl md:text-3xl lg:text-5xl font-bold ${isDarkMode ? "text-white" : "text-primaryColor"}`}>
            Luxury furnished serviced apartments in Saint Martin
          </h1>
          <p className={`py-4 md:py-6 text-sm md:text-base ${isDarkMode ? "text-white" : "text-primaryColor"}`}>
            Located in Saint Martin, CozyStay apartment hotel provides a
            peaceful, private retreat in the heart of one of the world’s most
            iconic cities. Experience a sophisticated blend of professional
            services and home comforts. We proudly offer a full range of
            complimentary amenities and services that provide you with
            everything you need for an inspiring stay.
          </p>
          <Link to="/about-us">
            <button className={`btn mt-4 md:mt-6 ${isDarkMode ? "bg-gray-700 text-white" : "bg-primaryColor text-white"}`}>
              Start Exploring
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
