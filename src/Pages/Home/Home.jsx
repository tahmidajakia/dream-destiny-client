import AboutSection from "./AboutSection";
import AboutSection2 from "./AboutSection2";
import Featured from "./Featured";
import NewsLatter from "./NewsLatter";
import Slider from "./Slider";
// import SpecialOffer from "./SpecialOffer";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AboutSection2></AboutSection2>
            <Featured></Featured>
            <AboutSection></AboutSection>
            {/* <SpecialOffer></SpecialOffer> */}
            <Testimonials></Testimonials>
            <NewsLatter></NewsLatter>
        </div>
    );
};

export default Home;