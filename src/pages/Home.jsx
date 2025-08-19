import HeroBanner from '../components/HeroBanner'
import AboutUs from '../components/AboutUs'
import OurFocus from '../components/OurFocus'
import OurSegments from '../components/OurSegments'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ContactUs from '../components/ContactUs'

function Home() {
  return (
    <div className='flex flex-col gap-10'>
      <Header />
      <HeroBanner />
      <AboutUs />
      <OurFocus />
      <OurSegments />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
