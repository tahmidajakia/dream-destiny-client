
import { Modal, Textarea } from "flowbite-react";
import { MdDateRange, MdOutlineCancel } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import DatePicker from "react-datepicker";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";


const BookingDetails = ({ booking, handleUpdateDate, showModal, setShowModal, handleCancel,  showModal2,setShowModal2,
    updateCheckInDate,
    setUpdateCheckInDate,
    setUpdateCheckOutDate,
    updateCheckOutDate,
    handleReview
}) => {
    const { _id, img, room_type, totalPrice, roomCount, checkInDate, checkOutDate, adultCount, childCount } = booking || {}
    console.log(booking);
    const { user } = useContext(AuthContext)
    return (
        <>
            {/* row 1 */}
            <tr >
                <th>
                    <button onClick={() => handleCancel(_id)} className="btn btn-sm btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="rounded-lg w-24 h-24">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{room_type}</div>
                            <div className="text-sm opacity-50">
                                <span className="font-bold">Date :</span>
                                {checkInDate && checkOutDate ? `${checkInDate} - ${checkOutDate}` : 'N/A'}
                            </div>
                            <div className="text-sm opacity-50">
                                <span className="font-bold">Details :</span>
                                Adults: {adultCount}, Child : {childCount}
                            </div>


                        </div>
                    </div>
                </td>
                <td>{totalPrice} </td>
                <td>{roomCount}</td>
                <td>{totalPrice}</td>
                <th>
                    <button onClick={() => setShowModal(true)} className="btn btn-ghost text-xl btn-xs"><MdDateRange /> </button>

                    {/* Modal component */}
                    <Modal className="-mt-6 py-12 h-[600px] text-primaryColor font-inter bg-white shadow-xl text-center p-6" show={showModal} >
                    <button onClick={() => setShowModal(false)} className="flex justify-end pr-6 text-3xl" ><MdOutlineCancel/></button>
                        <h2 className="text-2xl mt-8 font-bold">Update Dates</h2>
                        <p>Your Previous Booking Dates: {checkInDate && checkOutDate ? `${new Date(checkInDate).toLocaleDateString()} - ${new Date(checkOutDate).toLocaleDateString()}` : 'N/A'}</p>
                        <div className="mt-6 mb-4 md:flex md:gap-4 gap-8 mx-auto">
                            {/* check in date update */}
                            <DatePicker className="border-2 p-2 rounded-md" selected={updateCheckInDate} onChange={(updateCheckInDate) => setUpdateCheckInDate(new Date(updateCheckInDate).toLocaleDateString())} minDate={new Date()} />

                            {/* check Out date update */}

                            <DatePicker className="border-2 p-2 mt-4 md:mt-0 rounded-md" selected={updateCheckOutDate} onChange={(updateCheckOutDate) => setUpdateCheckOutDate(new Date(updateCheckOutDate).toLocaleDateString())}
                                minDate={new Date()} />

                        </div>
                        <button onClick={() => { handleUpdateDate(_id); setShowModal(false) }} className="btn mt-14 mb-8 mx-auto bg-primaryColor text-white">Save Changes</button>
                    </Modal>
                </th>
                <th><button onClick={() => setShowModal2(true)} ><FaEdit /></button>
                    <Modal className="-mt-6 py-24 h-[800px] text-primaryColor font-inter bg-white shadow-xl text-center p-8" show={showModal2} >
                        <button onClick={() => setShowModal2(false)} className="flex justify-end pr-6 text-3xl" ><MdOutlineCancel/></button>
                        <h2 className="text-xl mt-8 font-medium">What You Feel About Us <br /> Write here Freely</h2>


                        <form onSubmit={handleReview}>
                            <div className="rating mx-auto">
                                <input type="radio" value={1} name="rating" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" value={2} name="rating" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" value={3} name="rating" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" value={4} name="rating" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" value={5} name="rating" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className="mt-5">

                                <input value={user?.displayName} type="text" name="name" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User name" required readOnly />
                            </div>
                            <Textarea className="textarea w-3/4 mx-auto mt-5"
                                placeholder="Write something..." name="comment"></Textarea>

                            <button type="submit" className="btn mt-14 mb-8 mx-auto bg-primaryColor text-white">Save </button>

                        </form>
                        <div>

                        </div>


                    </Modal>
                </th>
            </tr>
        </>
    );
};

export default BookingDetails;