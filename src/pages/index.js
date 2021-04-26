import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from "../components/InfoSection/Data";
import Footer from "../components/Footer";
import { GlobalStyles } from "../GlobalStyles";
import Form from "../components/Form";
const Home = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Form />
      <Footer />
    </>
  );
};

export default Home;
