import { useContext, useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import BookNowModal from "./BookNowModal";
import { AuthContext } from "../../Provider/AuthProvider";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import toast from "react-hot-toast";

const BookNow = ({ roomDetails }) => {
    const { room_image, price_per_night, room_type } = roomDetails || {};
    const roomCleanPrice = 12;
    const massagePrice = 34;
    const spaPrice = 40;
    const roomCount = 1;

    const { user } = useContext(AuthContext);
    const [massageCount, setMassageCount] = useState(0);
    const [spaCount, setSpaCount] = useState(0);
    const [bookingData, setBookingData] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [booked, setBooked] = useState([]);
    
    const navigate = useNavigate(); // Initialize useNavigate for redirection

    useEffect(() => {
        bookData();
    }, []);

    const bookData = async () => {
        try {
            const response = await fetch('http://localhost:5000/bookings', {
                method: 'GET', // Change this to GET to fetch booking data
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            console.log(data);
            setBooked(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const isAvailable = Array.isArray(booked) && !booked.some(book => book.room_type === room_type);
    console.log(isAvailable);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleBookNow = async (e) => {
        e.preventDefault();
    
        // Check if the user is logged in
        if (!user) {
            navigate('/login'); // Redirect to the login page if the user is not logged in
            return;
        }
    
        // Check if the user has already booked any hotel
        if (user.alreadyBooked) {
            toast.error('You have already booked a hotel. You cannot book another one.');
            return; // Stop further execution if already booked to prevent modal from opening
        }
    
        // Check if the hotel has already been booked by any user
        const alreadyBooked = booked.some(book => book.room_type === room_type);
    
        if (alreadyBooked) {
            toast.error('This hotel is already booked. It cannot be booked twice.');
            return; // Stop further execution if already booked to prevent modal from opening
        }
    
        // Proceed with the booking if not already booked
        const form = e.target;
        const checkInDate = startDate;
        const checkOutDate = startDate2;
    
        if (checkOutDate <= checkInDate) return toast.error('End date must be after start date');
    
        const adultCount = form.adultCount.value;
        if (adultCount < 1) {
            return toast.error('Please select at least 1 adult');
        }
    
        const childCount = form.childCount.value;
        const email = user?.email;
        const name = user?.displayName;
        const roomClean = form.roomClean.checked;
    
        // Calculate the number of nights
        const nightCount = Math.floor((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    
        // Calculate total prices
        const mainTotalPrice = price_per_night * nightCount;
        let extraPrice = roomClean ? roomCleanPrice * nightCount : 0;
        const extraTotalPrice = (massageCount * massagePrice) + (spaCount * spaPrice) + extraPrice;
        const totalPrice = mainTotalPrice + extraTotalPrice;
    
        setBookingData({
            checkInDate: new Date(checkInDate).toLocaleDateString(),
            checkOutDate: new Date(checkOutDate).toLocaleDateString(),
            adultCount,
            childCount,
            totalPrice,
            price_per_night,
            email,
            img: room_image,
            room_type,
            roomCount,
            name
        });
    
        // Set the user's alreadyBooked status to true after successful booking
        user.alreadyBooked = true; // Update the user object
    
        handleOpen();
    };

    const handleIncreaseCount = () => {
        setMassageCount(massageCount + 1)
    }
    const handleDecreaseCount = () => {
        if (massageCount > 0) {
            setMassageCount(massageCount - 1)
        }
    }
    const handleIncreaseCount2 = () => {
        setSpaCount(spaCount + 1)
    }
    const handleDecreaseCount2 = () => {
        if (massageCount > 0) {
            setSpaCount(spaCount - 1)
        }
    }
    console.log(bookingData);

    return (
        <div>
            <form
                onSubmit={handleBookNow}
                className="px-3 my-6 text-primaryColor rounded-lg mx-8 lg:mx-auto"
            >
                <div className="flex items-center gap-10 justify-between">
                    <h2 className="mt-3 text-3xl font-inter font-semibold">RESERVE:</h2>
                    <p className="flex gap-2 text-lg ">
                        From
                        <span className="font-semibold text-primaryColor">
                            ${price_per_night}
                            <span>/night</span>
                        </span>
                    </p>
                </div>
                <div className="mt-6 mb-4 md:flex md:gap-4 gap-8">
                    <DatePicker
                        className="border-2 p-2 rounded-md"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        minDate={new Date()}
                    />
                    <DatePicker
                        className="border-2 p-2 mt-4 md:mt-0 rounded-md"
                        selected={startDate2}
                        onChange={(date) => setStartDate2(date)}
                        minDate={startDate} // Prevent selecting a check-out date before check-in
                    />
                </div>

                <div className="flex gap-2 my-4 ">
                    <select
                        name="adultCount"
                        className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        defaultValue={0}
                        required
                    >
                        <option value={0} disabled>
                            Select Adult
                        </option>
                        <option value={1}>Adult 1</option>
                        <option value={2}>Adult 2</option>
                        <option value={3}>Adult 3</option>
                        <option value={4}>Adult 4</option>
                    </select>
                    <select
                        name="childCount"
                        className="bg-white border-2 border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        defaultValue={0}
                        required
                    >
                        <option value={0} disabled>
                            Select Child
                        </option>
                        <option value={1}>Child 1</option>
                        <option value={2}>Child 2</option>
                        <option value={3}>Child 3</option>
                        <option value={4}>Child 4</option>
                    </select>
                </div>
                <div className="mt-10">
                    <h2 className="mt-3 text-2xl font-inter font-semibold">
                        Extra Services
                    </h2>
                    <div className="flex mt-4 items-center justify-between">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="roomClean" id="roomClean" />
                            <h5>Room Clean</h5>
                        </div>
                        <h5>${roomCleanPrice}/night </h5>
                    </div>
                    <div className="flex mt-6 items-center justify-between">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="massage" id="massage" />
                            <h5>Massage</h5>
                        </div>
                        <div className="flex gap-3 items-center">
                            <h5>${massagePrice}/person</h5>
                            <div className="relative flex items-center max-w-[8rem]">
                                <button
                                    onClick={handleDecreaseCount}
                                    type="button"
                                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-2"
                                >
                                    -
                                </button>
                                <span className="px-3">{massageCount}</span>
                                <button
                                    onClick={handleIncreaseCount}
                                    type="button"
                                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-2"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-4 items-center justify-between">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="spa" id="spa" />
                            <h5>Spa</h5>
                        </div>
                        <div className="flex gap-3 items-center">
                            <h5>${spaPrice}/person</h5>
                            <div className="relative flex items-center max-w-[8rem]">
                                <button
                                    onClick={handleDecreaseCount2}
                                    type="button"
                                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-2"
                                >
                                    -
                                </button>
                                <span className="px-3">{spaCount}</span>
                                <button
                                    onClick={handleIncreaseCount2}
                                    type="button"
                                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-2"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between mt-4 border-t border-b py-4">
                    <h2 className="text-2xl font-inter font-semibold">Total:</h2>
                    <h2 className="text-2xl font-inter font-semibold">
                        ${bookingData.totalPrice || 0}
                    </h2>
                </div>
                <button
                    onClick={handleOpen}
                    type="submit"
                    className="w-full bg-primaryColor text-white font-inter py-3 rounded-lg hover:bg-opacity-90 mt-4"
                >
                    Book Now
                </button>
            </form>
            <BookNowModal open={open} handleClose={handleClose} bookingData={bookingData} />
        </div>
    );
};

export default BookNow;
