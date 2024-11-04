const NewsLatter = () => {
  return (
    <div
      data-aos="fade-left"
      className="md:flex mt-10 items-center justify-center gap-8 max-w-7xl lg:mx-auto mx-6 bg-white shadow-xl rounded-lg p-8 text-primaryColor f font-inter"
    >
      <div className="flex-1 ">
        <p className=" text-lg my-4">STAY TUNED WITH DREMYDESTINY</p>
        <h1 className="lg:text-3xl text-2xl font-semibold">
          Sign up for our newsletter to <br />
          receive our news, deals and special offers.
        </h1>
      </div>
      <div className="flex-1 mt-6 md:mt-0">
        <form className="">
          <div className="mb-5 flex relative">
            <input
              type="email"
              id="email"
              name="email"
              className=" bg-gray-50 border h-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required
            />
            <button className=" right-2 top-2 py-3 px-4 absolute text-white bg-primaryColor  rounded-lg">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLatter;
