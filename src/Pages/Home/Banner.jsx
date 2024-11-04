// Banner.jsx
import { Link } from 'react-router-dom';
import Button from './Button'; // Assuming you have a Button component

const Banner = ({ image, text, des }) => {
    return (
        <div
            className="h-[600px] bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(#0f0c29BA ,#302b638A,#24243e4D), url(${image})`
            }}
        >
            <div 
                data-aos="fade-right" 
                data-aos-duration="2000"
                className="text-center mx-auto lg:text-left lg:pl-20 py-32"
            >
                <h1 className="font-inter text-5xl text-white font-bold leading-snug xl:w-1/3 lg:w-2/5">
                    {text}
                </h1>
                <p className="lg:w-1/3 text-[#f6f6f6]">
                    {des}
                </p>
                <div className="flex gap-6 justify-center lg:justify-start">
                    <Link to='/register'>
                        <Button className="bg-primaryColor lg:mx-0 mt-8 text-2xl shadow-xl">
                            Register Now
                        </Button>
                    </Link>
                    <Button className="bg-primaryColor lg:mx-0 mt-8 text-2xl shadow-xl">
                        Enquire Now
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
