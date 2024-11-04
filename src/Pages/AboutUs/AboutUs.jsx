import bg from '../../assets/image/about-us-DVcJaTaf.jpg'

const AboutUs = () => {
  return (
    <div>
      <div
        className="lg:p-32 p-24 bg-no-repeat bg-cover bg-center text-center text-white font-inter"
        style={{
          backgroundImage: `linear-gradient(#0f0c29BA ,#302b638A,#24243e4D) , url(${bg})`,
        }}
      >
        <h5>An Iconic Since 2000</h5>
        <h1 className="lg:text-4xl text-3xl font-bold ">About The Hotel</h1>
        <h5>Oceanfront bliss: where every wave whispers tranquility.</h5>
      </div>
    </div>
  );
};

export default AboutUs;
