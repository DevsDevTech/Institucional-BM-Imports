import { Handshake, Star, Globe, Award } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import megaTradingLogo from "../assets/megatrading.png";
import nobreTradingLogo from "../assets/nobretrading.png";

function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const partners = [
    {
      name: "NOBRE TRADING",
      logo: nobreTradingLogo
    },
    {
      name: "MEGA TRADING", 
      logo: megaTradingLogo
    }
  ];

  const partnershipBenefits = [
    {
      icon: Handshake,
      title: "Parcerias Estratégicas",
      description: "Relacionamentos comerciais sólidos e duradouros baseados em confiança mútua, transparência total e benefícios compartilhados."
    },
    {
      icon: Star,
      title: "Certificação Internacional",
      description: "Parceiros rigorosamente selecionados com certificações ISO, FDA e outras normas internacionais de qualidade e segurança."
    },
    {
      icon: Globe,
      title: "Rede Global Premium",
      description: "Rede estratégica de fornecedores premium em 15+ países, garantindo diversidade de produtos e competitividade comercial."
    },
    {
      icon: Award,
      title: "Excelência Operacional",
      description: "Compromisso inabalável com a excelência em cada projeto, processo e entrega, superando expectativas consistentemente."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-zinc-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 right-20 w-60 h-60 bg-accent-blue/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="heading-primary mb-8">
            Nossos Parceiros
          </h2>
          <p className="text-xl leading-relaxed text-slate-600 max-w-5xl mx-auto">
            Mantemos parcerias estratégicas exclusivas com empresas líderes e renomadas no mercado internacional, 
            garantindo qualidade excepcional, confiabilidade operacional e inovação constante em todos os nossos produtos e serviços.
          </p>
        </div>

        {/* Logos dos Parceiros */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mb-20">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className={`group transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              {/* Logo Real Premium */}
              <div className="bg-white rounded-3xl p-10 shadow-large hover:shadow-premium motion-premium hover:scale-105 group-hover:-translate-y-2 border border-slate-200">
                <div className="w-80 h-24 bg-gradient-light rounded-2xl flex items-center justify-center border border-slate-100 shadow-soft p-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefícios da Parceria Premium */}
        <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-premium border border-slate-100">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 text-center mb-16">
            Por que Escolher Nossos Parceiros?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {partnershipBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index}
                  className={`text-center group transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${800 + index * 150}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 group-hover:scale-110 motion-premium shadow-medium ${
                    index % 2 === 0 ? 'bg-gradient-accent' : 'bg-gradient-to-br from-red-500 to-red-600'
                  }`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  
                  <h4 className={`text-lg font-bold mb-3 motion-safe ${
                    index % 2 === 0 ? 'text-slate-800 group-hover:text-accent-blue' : 'text-slate-800 group-hover:text-accent-red'
                  }`}>
                    {benefit.title}
                  </h4>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section Premium */}
        <div className={`text-center mt-20 transition-all duration-1000 ease-out delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-light rounded-3xl p-12 lg:p-16 shadow-large border border-slate-200">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              Quer se Tornar Nosso Parceiro?
            </h3>
            <p className="text-slate-600 mb-10 max-w-4xl mx-auto text-lg leading-relaxed">
              Estamos constantemente expandindo nossa rede de parceiros estratégicos, buscando empresas visionárias que compartilhem 
              nossos valores fundamentais de qualidade excepcional, confiabilidade operacional e excelência no atendimento ao cliente.
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contato');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded-2xl font-semibold text-lg motion-premium hover:scale-105 shadow-premium relative overflow-hidden group"
            >
              <span className="relative z-10">Entre em Contato</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
