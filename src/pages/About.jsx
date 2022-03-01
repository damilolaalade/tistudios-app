import AboutUsText from "../components/AboutUsText";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
//import Bookings from "../components/Bookings";
import Newsletter from "../components/Newsletter";

const About = () => {
  return (
    <div>
      <NavBar />
      <AboutUsText />
      {/* <Bookings /> */}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default About;
