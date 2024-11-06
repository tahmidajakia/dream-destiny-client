import img4 from "../../assets/image/aboutusbanner.jpg";

const ContactUs = () => {
  return (
    <div className="">
      {/* Background Section */}
      <div
        className="lg:p-32 p-24 bg-no-repeat bg-cover bg-center text-center text-white font-inter"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 12, 41, 0.9), rgba(48, 43, 99, 0.8), rgba(36, 36, 62, 0.7)), url(${img4})`,
        }}
      >
        <div className="space-y-3">
          <h3 className="lg:text-4xl text-3xl font-bold">Contact Us</h3>
          <p>For bookings and enquiries, please call us or write to us.</p>
        </div>
      </div>

      {/* Map and Information Section */}
      <div className="font-inter max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 my-10 px-4">
        {/* Map Section */}
        <iframe
          title="Saint Martin Map"
          className="w-full lg:w-1/2 h-96 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18345.07474672407!2d92.32313169292696!3d20.62719764947966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc8f5375ef29d%3A0x74a9579d53c907df!2sSaint%20Martin%20Island%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1699020012356!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          style={{ height: "100%", minHeight: "400px" }}
        ></iframe>

        {/* Information Div */}
        <div className="w-full text-center lg:w-1/2 h-full p-6 border-2 border-primaryColor rounded-lg text-primaryColor font-inter shadow-lg bg-white space-y-4">
          <h2 className="text-2xl font-bold">Reservation</h2>
          <p>
            <strong>Direct Reservations</strong>
          </p>
          <p>Email: reservations@cozystay.com</p>
          <p>Reservations Fax: 1.212.555-5555</p>
          <p>Call: +1 212-555-6688</p>

          <h2 className="text-2xl font-bold mt-6">Hotel Address</h2>
          <p>CozyStay City Apartments</p>
          <p>1250 West 6th Ave,</p>
          <p>New York, NY 10036,</p>
          <p>United States</p>
        </div>
      </div>

      {/* New Section with Text, Form, and Image Divs */}
      <div className="flex max-w-7xl mx-auto flex-col lg:flex-row justify-center items-stretch gap-10 my-10 px-4 mt-24">
        {/* Text and Form Div with Blue Border */}
        <div className="w-full lg:w-1/3 p-6 border-2 border-primaryColor text-primaryColor font-inter shadow-lg rounded-lg bg-white flex flex-col justify-between">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold">Have any questions?</h2>
            <h4 className="text-xl mt-2">Let's start a conversation</h4>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
          </div>

          <form className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                placeholder="Write your message"
                className="textarea textarea-bordered w-full"
                required
              ></textarea>
            </div>
            <div className="form-control">
              <button type="submit" className="btn bg-primaryColor text-white w-full">
                Send Your Message
              </button>
            </div>
          </form>
        </div>

        {/* Image Div with Equal Height */}
        <div className="w-full lg:w-2/3 rounded-lg shadow-lg flex items-center justify-center">
          <img
            src={img4}
            alt="Contact section background"
            className="rounded-lg w-full h-full object-cover"
            style={{ height: "100%" }} // Ensures full height
          />
        </div>
      </div>

      <div
      data-aos="fade-left"
      className="md:flex mt-24 mb-24 items-center justify-center gap-8 max-w-7xl lg:mx-auto mx-6 bg-white shadow-xl rounded-lg rounded-t-md border-t-4 border-primaryColor p-8 text-primaryColor font-inter"
    >
      <div className="flex-1">
        <p className="text-lg my-4">STAY TUNED WITH DREMYDESTINY</p>
        <h1 className="lg:text-3xl text-2xl font-semibold">
          Sign up for our newsletter to <br />
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
              className="bg-gray-50 border h-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required
            />
            <button className="right-2 top-2 py-3 px-4 absolute text-white bg-primaryColor rounded-lg">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>

      {/* Additional Gap */}
      <div className="my-10" /> {/* This adds additional space between sections */}
    </div>
  );
};

export default ContactUs;
