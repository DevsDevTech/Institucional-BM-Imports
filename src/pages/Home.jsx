import HeroBanner from "../components/HeroBanner";
import AboutUs from "../components/AboutUs";
import BenefitsSection from "../components/BenefitsSection";
import OurFocus from "../components/OurFocus";
import OurSegments from "../components/OurSegments";
import PartnersSection from "../components/PartnersSection";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRef, useEffect } from "react";

function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const benefitsRef = useRef(null);
  const missionRef = useRef(null);
  const segmentsRef = useRef(null);
  const partnersRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Adicionar IDs aos elementos para navegação
  useEffect(() => {
    const sections = [
      { ref: homeRef, id: 'home' },
      { ref: aboutRef, id: 'sobre' },
      { ref: benefitsRef, id: 'diferenciais' },
      { ref: missionRef, id: 'missao' },
      { ref: segmentsRef, id: 'segmentos' },
      { ref: partnersRef, id: 'parceiros' },
      { ref: contactRef, id: 'contato' }
    ];

    sections.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.id = id;
      }
    });
  }, []);

  const refs = {
    homeRef,
    aboutRef,
    benefitsRef,
    missionRef,
    segmentsRef,
    partnersRef,
    contactRef
  };

  return (
    <div className="min-h-screen">
      <Header onScroll={handleScroll} refs={refs} />
      
      <main>
        {/* 1. Hero Banner */}
        <section ref={homeRef} className="section-scroll-margin">
          <HeroBanner onScroll={handleScroll} refs={refs} />
        </section>

        {/* 2. Sobre Nós */}
        <section ref={aboutRef} className="section-scroll-margin">
          <AboutUs />
        </section>

        {/* 3. Diferenciais/Benefícios */}
        <section ref={benefitsRef} className="section-scroll-margin">
          <BenefitsSection />
        </section>

        {/* 4. Missão Estratégica */}
        <section ref={missionRef} className="section-scroll-margin">
          <OurFocus />
        </section>

        {/* 5. Segmentos de Atuação */}
        <section ref={segmentsRef} className="section-scroll-margin">
          <OurSegments />
        </section>

        {/* 6. Parceiros */}
        <section ref={partnersRef} className="section-scroll-margin">
          <PartnersSection />
        </section>

        {/* 7. Contato */}
        <section ref={contactRef} className="section-scroll-margin">
          <ContactUs />
        </section>
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}

export default Home;
