import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import toast from 'react-hot-toast';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', sm: 400 }, // Responsive width
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: { xs: 2, sm: 4 }, // Responsive padding
    borderRadius: 2, // Rounded corners
};

const BookNowModal = ({ bookingData, handleClose, open }) => {
    const {
        checkInDate,
        checkOutDate,
        adultCount,
        childCount,
        totalPrice,
        img,
        room_type,
        roomCount,
    } = bookingData || {};

    const handleConfirm = async () => {
        try {
            const response = await fetch('http://localhost:5000/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            console.log(data);

            toast.success("Hotel booked successfully!");

            handleClose();
        } catch (err) {
            console.error("Error:", err);
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className="text-center">
                    <img 
                        src={img} 
                        alt="Room" 
                        className="w-full h-auto max-w-xs mx-auto mb-4 rounded-md" // Responsive image sizing
                    />
                    <p className="text-lg font-semibold">Room Type: {room_type}</p>
                    <p>Check-in Date: {checkInDate}</p>
                    <p>Check-out Date: {checkOutDate}</p>
                    <p>Adults: {adultCount}</p>
                    <p>Children: {childCount}</p>
                    <p>Total Price: ${totalPrice}</p>
                    <p>Number of Rooms: {roomCount}</p>
                </div>
                <div className="flex justify-center gap-4 mt-6">
                    <button
                        className="bg-primaryColor w-24 py-2 rounded-lg text-white text-sm sm:text-base"
                        onClick={handleConfirm}
                    >
                        Confirm
                    </button>
                    <button
                        className="bg-gray-500 w-24 py-2 rounded-lg text-white text-sm sm:text-base"
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                </div>
            </Box>
        </Modal>
    );
};

export default BookNowModal;
