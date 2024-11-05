import AboutSection from "./AboutSection";
import Featured from "./Featured";
import NewsLatter from "./NewsLatter";
import Slider from "./Slider";
import SpecialOffer from "./SpecialOffer";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Featured></Featured>
            <AboutSection></AboutSection>
            <SpecialOffer></SpecialOffer>
            <Testimonials></Testimonials>
            <NewsLatter></NewsLatter>
        </div>
    );
};

export default Home;