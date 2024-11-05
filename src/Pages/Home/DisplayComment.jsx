import { useContext, useEffect, useState } from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { AuthContext } from "../../Provider/AuthProvider";


const DisplayComment = ({ roomDetails }) => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);


    const url = 'http://localhost:5000/reviews';

    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/reviews?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log(data);
            setReviews(data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };
    const filteredReviews = reviews.filter(review => review.roomId === roomDetails._id);
    console.log(filteredReviews);



    return (
        <div className="space-y-5">

           
                {
                    filteredReviews.map(reviews => (

                        <div key={reviews._id}
                        className="border-yellow-400 w-1/3 p-6 border">

                           
                         
                               <h1 className="4xl text-primaryColor font-bold">{reviews.name}</h1>
                               <p>{new Date(reviews.timeStamp).toLocaleDateString()}</p>
                               <p className="flex gap-2  items-center">{reviews.rating}<MdOutlineStarPurple500 /></p>
                              
                                <p>{reviews.comment}</p>
                              

                        </div>
                    ))
                }
         

        </div>
    );
};

export default DisplayComment;