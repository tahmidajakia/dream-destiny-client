import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi"; // Import the logout icon from react-icons
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  const navLinks = (
    <>
      <li>
        <Link to="/" className={isDarkMode ? "text-white" : "text-primaryColor"}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about-us" className={isDarkMode ? "text-white" : "text-primaryColor"}>
          About Us
        </Link>
      </li>
      <li>
        <Link to="/rooms" className={isDarkMode ? "text-white" : "text-primaryColor"}>
          Rooms
        </Link>
      </li>
      <li>
        <Link to="/my-bookings" className={isDarkMode ? "text-white" : "text-primaryColor"}>
          My Bookings
        </Link>
      </li>
      <li>
        <Link to="/contact-us" className={isDarkMode ? "text-white" : "text-primaryColor"}>
          Contact Us
        </Link>
      </li>
    </>
  );

  return (
    <div className={`navbar bg-base-100 px-4 md:px-6 lg:px-16 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
      <div className="navbar-start flex items-center gap-3">
        <div className="dropdown lg:hidden">
          <button
            tabIndex={0}
            className="btn btn-ghost"
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu on click
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {isMenuOpen && ( // Show the menu when isMenuOpen is true
            <ul className="dropdown-content mr-10 mt-3 w-52 menu p-2 shadow bg-base-100 rounded-box z-50"> {/* Increase z-index */}
              {navLinks}
            </ul>
          )}
        </div>

        <Link
          to="/"
          className={`text-2xl font-lobster sm:text-3xl font-semibold ${isDarkMode ? "text-white" : "text-primaryColor"}`}
        >
          DreamyDestiny
        </Link>

        <div className="relative hidden sm:block ml-4 md:ml-8">
          <input
            type="text"
            placeholder="Search"
            className={`input input-bordered pl-3 pr-10 py-2 w-24 sm:w-36 md:w-48 ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"}`}
          />
          <AiOutlineSearch className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? "text-white" : "text-gray-500"}`} />
        </div>
      </div>

      <div className="navbar-end font-bold flex items-center gap-4">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu mr-7  menu-horizontal px-1 space-x-4">{navLinks}</ul>
        </div>

        <button
          onClick={toggleTheme}
          className="border mr-2 border-gray-400 p-2 rounded-full text-xl text-gray-500 hover:text-primaryColor transition-colors duration-200"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content rounded-box z-[10] mt-3 w-52 p-2 shadow space-y-2 ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
            >
              <div className="flex justify-center items-center">
                <img
                  className="w-24 h-24 rounded-full "
                  src={user.photoURL}
                  alt=""
                />
              </div>
              <h1 className="text-center">
                <span className={`${isDarkMode ? "text-blue-300" : "text-blue-500"} font-semibold`}>
                  {user.displayName || "Guest"}
                </span>
              </h1>
              <hr />
              <h1 className="text-center">
                <span className={`${isDarkMode ? "text-blue-300" : "text-blue-500"} text-sm`}>
                  {user.email || "guest@example.com"}
                </span>
              </h1>
              <hr />
              <li className="flex items-center">
                <button
                  onClick={handleLogOut}
                  className={`${isDarkMode ? "text-blue-300" : "text-blue-500"} hover:text-blue-700 flex items-center`}
                >
                  Logout <FiLogOut className="mr-2" />
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className={`border px-3 py-2 rounded-lg transition-colors duration-200 ${isDarkMode ? "border-white text-white hover:bg-white hover:text-black" : "border-blue-500 bg-white text-black hover:bg-blue-500 hover:text-white"}`}>
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
