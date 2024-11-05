import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const useBookings = () => {
    const { user } = useContext(AuthContext)
    const { refetch, data: booking = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/bookings?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // If you need cookies or session management
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            return response.json();
        }
    });

    return [booking, refetch];
};

export default useBookings;
