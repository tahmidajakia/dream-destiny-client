import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

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
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [isDarkMode]);

  const navLink = (
    <>
      <li>
        <Link to="/" className="text-primaryColor">
          HOME
        </Link>
      </li>
      <li>
        <Link to="/about-us" className="text-primaryColor">
          About Us
        </Link>
      </li>
      <li>
        <Link to="/rooms" className="text-primaryColor">
          Rooms
        </Link>
      </li>
      <li>
        <Link to="/my-bookings" className="text-primaryColor">
          My Bookings
        </Link>
      </li>
      <li>
        <Link to="/contact-us" className="text-primaryColor">
          Contact Us
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-4 md:px-6 lg:px-16">
      <div className="navbar-start flex items-center gap-3">
        {/* Mobile Dropdown Menu */}
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost" aria-label="Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content mt-3 w-52 menu p-2 shadow bg-base-100 rounded-box"
          >
            {navLink}
          </ul>
        </div>

        {/* Brand Logo */}
        <Link
          to="/"
          className="text-lg font-lobster sm:text-xl font-semibold text-primaryColor dark:text-white"
        >
          DreamyDestiny
        </Link>

        {/* Search Input */}
        <div className="relative hidden sm:block ml-4 md:ml-8">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered pl-3 pr-10 py-2 w-24 sm:w-36 md:w-48"
          />
          <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className="navbar-end flex items-center gap-4">
        {/* Navbar Links for Larger Screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{navLink}</ul>
        </div>

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          className="border border-gray-400 p-2 rounded-full text-xl text-gray-500 hover:text-primaryColor transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Sign In Button */}
        {user ? (
          <button onClick={handleLogOut}>LogOut</button>
        ) : (
          <Link to="/login">
            <button className="border border-blue-500 bg-white text-black px-3 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-200">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
