import bg from "../../assets/image/aboutusbanner2.jpg";
import img1 from "../../assets/image/aboutuspage.jpg";
import parts from "../../assets/image/aboutuspage2.jpg";
import img4 from "../../assets/image/aboutusbanner.jpg";
import img5 from "../../assets/image/407671.webp";

const AboutUs = () => {
  return (
    <div>
      {/* Header Section */}
      <div
        className="lg:p-32 md:p-24 p-12 bg-no-repeat bg-cover bg-center text-center text-white font-inter"
        style={{
          backgroundImage: `linear-gradient(#0f0c29BA ,#302b638A,#24243e4D), url(${bg})`,
        }}
      >
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">
          About The Hotel
        </h1>
        <h5 className="text-sm md:text-base">
          Oceanfront bliss: where every wave whispers tranquility.
        </h5>
      </div>

      {/* About Section */}
      <div className="hero min-h-screen mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse items-center">
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
            <h3 className="text-primaryColor font-bold text-lg md:text-xl">
              The Story Of Our Hotel
            </h3>
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-primaryColor font-bold">
              The Legend Began in 1998
            </h1>
            <p className="py-4 text-primaryColor text-sm md:text-base">
              Located in Saint Martin, CozyStay apartment hotel provides a
              peaceful, private retreat in the heart of one of the world’s most
              iconic cities. Experience a sophisticated blend of professional
              services and home comforts. We proudly offer a full range of
              complimentary amenities and services that provide you with
              everything you need for an inspiring stay.
            </p>
            <h1 className="text-lg md:text-2xl">And The Legend Continues...</h1>
          </div>
        </div>
      </div>

      {/* Location and Booking Sections */}
      <div className="flex flex-col md:flex-row">
        <div
          className="lg:p-32 md:p-24 p-12 bg-no-repeat bg-cover bg-center text-center text-white font-inter"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 12, 41, 0.9), rgba(48, 43, 99, 0.8), rgba(36, 36, 62, 0.7)), url(${img4})`,
          }}
        >
          <div className="space-y-3">
            <h1>Our Location</h1>
            <h3 className="lg:text-4xl text-2xl md:text-3xl font-bold">
              Getting Here
            </h3>
            <h1>CozyStay Aparthotel In Saint Martin</h1>
            <p>415 6th Avenue, New York, New York, USA, 10018</p>
            <h1>Tel: +1 212-555-6699</h1>
            <h1>Email: information@cozystay.com</h1>
          </div>
        </div>
        <div
          className="lg:p-32 md:p-24 p-12 bg-no-repeat bg-cover bg-center text-center text-white font-inter"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 12, 41, 0.9), rgba(48, 43, 99, 0.8), rgba(36, 36, 62, 0.7)), url(${img5})`,
          }}
        >
          <div className="space-y-3">
            <h1>Book a Room</h1>
            <h1 className="lg:text-4xl text-2xl md:text-3xl font-bold">
              About The Hotel
            </h1>
            <h1>
              Everything at CozyStay, in its restaurants, bar, and spa is
              designed
            </h1>
            <p>to make your stay, lunch, or dinner unforgettable.</p>
            <h1>Tel: +1 212-555-6688</h1>
            <h1>Email: reservation@cozystay.com</h1>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div
        data-aos="fade-left"
        className="md:flex mt-24 mb-24 items-center justify-center gap-8 max-w-7xl lg:mx-auto mx-6 bg-white shadow-xl rounded-lg rounded-t-md border-t-4 border-primaryColor p-8 text-primaryColor font-inter"
      >
        <div className="flex-1 text-center md:text-left">
          <p className="text-lg my-4">STAY TUNED WITH DREMYDESTINY</p>
          <h1 className="lg:text-3xl text-2xl font-semibold">
            Sign up for our newsletter to <br className="hidden md:block" />
            receive our news, deals, and special offers.
          </h1>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <form>
            <div className="mb-5 flex relative">
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border h-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 md:p-6"
                placeholder="name@company.com"
                required
              />
              <button className="right-2 top-2 py-2 md:py-3 px-3 md:px-4 absolute text-white bg-primaryColor rounded-lg">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
