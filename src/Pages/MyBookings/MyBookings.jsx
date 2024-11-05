import { useContext, useEffect, useState } from "react";
import BookingsDetails from "../Home/BookingsDetails";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [updateCheckInDate, setUpdateCheckInDate] = useState('');
    const [updateCheckOutDate, setUpdateCheckOutDate] = useState('');

    useEffect(() => {
        if (user?.email) {
            getData();
        }
    }, [user]);

    const getData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/my-bookings/${user?.email}`, {
                method: 'GET',
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
            setBookings(data);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    const handleReview = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = user?.displayName;
        const rating = form.rating.value;
        const comment = form.comment.value;
        const roomId = bookings._id;
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
            const response = await fetch(`http://localhost:5000/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reviews),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log(data);
    
            setShowModal2(false);
        } catch (err) {
            console.log('Error posting review:', err);
        }
    };

    const handleCancel = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:5000/bookings/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
    
                    const data = await response.json();
                    console.log(data);
    
                    if (data.deleteCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your booking has been deleted.",
                            icon: "success"
                        });
                    }
                    
                    getData();
                } catch (err) {
                    console.log(err);
                }
            }
        });
    };

    const handleUpdateDate = async (id) => {
        const updateDate = {
            checkInDate: updateCheckInDate,
            checkOutDate: updateCheckOutDate
        };

        try {
            const response = await fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateDate),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);

            if (data.modifiedCount > 0) {
                getData();
                toast.success('Updated date successfully');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="overflow-x-auto max-w-7xl mx-auto mt-20">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>SubTotal</th>
                        <th>Update</th>
                        <th>Post</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.length > 0 ? (
                            bookings.map(booking => (
                                <BookingsDetails
                                    key={booking._id}
                                    booking={booking}
                                    handleUpdateDate={handleUpdateDate}
                                    showModal={showModal}
                                    showModal2={showModal2}
                                    setShowModal={setShowModal}
                                    setShowModal2={setShowModal2}
                                    handleCancel={handleCancel}
                                    updateCheckInDate={updateCheckInDate}
                                    setUpdateCheckInDate={setUpdateCheckInDate}
                                    setUpdateCheckOutDate={setUpdateCheckOutDate}
                                    updateCheckOutDate={updateCheckOutDate}
                                    handleReview={handleReview}
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center">No bookings found.</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyBookings;
