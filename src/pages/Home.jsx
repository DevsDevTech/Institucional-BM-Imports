import HeroBanner from "../components/HeroBanner";
import AboutUs from "../components/AboutUs";
import OurFocus from "../components/OurFocus";
import OurSegments from "../components/OurSegments";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactUs from "../components/ContactUs";
import { useRef } from "react";

function Home() {
  const aboutRef = useRef(null);
  const segmentsRef = useRef(null);
  const homeRef = useRef(null);

  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header
        onScroll={handleScroll}
        refs={{ aboutRef, segmentsRef, homeRef }}
      />
      <div className="flex flex-col space-y-30">
        <div ref={homeRef} >
          <HeroBanner
            onScroll={handleScroll}
            refs={{ aboutRef, segmentsRef }}
          />
        </div>
        <div ref={aboutRef}  className="section-scroll-margin pb-25">
          <AboutUs refs={{ homeRef }} />
        </div>
        <OurFocus />
        <div ref={segmentsRef} className="section-scroll-margin pb-30 flex justify-center items-center">
          <OurSegments  />
        </div>
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default Home;
