import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TransformSection from "./components/TransformSection";
import StandoutSection from "./components/StandoutSection";
import BannerLayout from "./components/BannerLayout";
import TestimonialSection from "./components/TestimonialSection";
import ShowcaseLayout from "./components/ShowcaseLayout";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TransformSection />
      <StandoutSection />
      <BannerLayout />
      <TestimonialSection />
      <ShowcaseLayout />
      <Footer />
    </>
  );
};

export default App;