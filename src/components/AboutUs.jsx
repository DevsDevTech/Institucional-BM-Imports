import { Building2, Globe, Users, Award } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import aboutUsImage from "../assets/img/fachada.jpg";

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Building2, label: "Anos de Experiência", value: "10+" },
    { icon: Globe, label: "Países Parceiros", value: "15+" },
    { icon: Users, label: "Clientes Ativos", value: "500+" },
    { icon: Award, label: "Produtos Importados", value: "1000+" },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Imagem */}
          <div className={`order-2 lg:order-1 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              {/* Imagem premium */}
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-premium relative">
                <img 
                  src={aboutUsImage} 
                  alt="Sobre a BM Imports" 
                  className="w-full h-full object-cover hover:scale-110 motion-premium"
                />
                {/* Overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Elementos decorativos premium */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent-blue/10 rounded-full blur-2xl animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-red-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className={`order-1 lg:order-2 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div>
              <h2 className="heading-primary mb-8">
                Quem Somos
              </h2>
              
              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-slate-700">
                  Somos uma <strong className="text-accent-blue font-semibold">consultoria e assessoria especializada em importação e distribuição</strong> com 
                  sede em Atibaia-SP. Conectamos fornecedores internacionais renomados a 
                  clientes locais, oferecendo produtos com qualidade superior, prazos claros e 
                  suporte técnico especializado.
                </p>
                
                <p className="text-lg leading-relaxed text-slate-700">
                  Trabalhamos com <strong className="text-accent-red font-semibold">importação direta e distribuidores 
                  nacionais certificados</strong> — nosso portfólio diversificado inclui: compactadoras de alta performance, máquinas e peças para 
                  construção civil, itens premium para hotelaria, pisos vinílicos de última geração, equipamentos profissionais de 
                  academia e acessórios sofisticados para pets.
                </p>
              </div>

              {/* Estatísticas Premium */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={index} 
                      className={`text-center group transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                      style={{ transitionDelay: `${800 + index * 150}ms` }}
                    >
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 group-hover:scale-110 motion-premium shadow-medium ${
                        index % 2 === 0 ? 'bg-gradient-accent' : 'bg-gradient-to-br from-red-500 to-red-600'
                      }`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <div className={`text-3xl lg:text-4xl font-bold mb-2 ${
                        index % 2 === 0 ? 'text-accent-blue' : 'text-accent-red'
                      }`}>
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
