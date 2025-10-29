import { ExternalLink, Dumbbell, Bed, Grid3X3, Layers, Luggage, Truck, Armchair, Droplets } from "lucide-react";
import { useState, useEffect, useRef } from "react";
// Importando imagens reais
import academiaImg from "../assets/img/Academia/3.jpg";
import hotelaria1Img from "../assets/img/Hotelaria/14.jpg";
import hotelaria2Img from "../assets/img/Hotelaria/17.jpg";
import pisoImg from "../assets/img/Piso vinílico e ripado/20.jpg";
import painelImg from "../assets/img/Piso vinílico e ripado/21.jpg";

function OurSegments() {
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

  const segments = [
    {
      title: "Equipamentos de Academia",
      description: "Equipamentos profissionais de academia com tecnologia avançada, certificação internacional e garantia estendida para ginásios e academias de alto padrão.",
      image: academiaImg,
      icon: Dumbbell
    },
    {
      title: "Setor Hoteleiro",
      description: "Produtos premium e acessórios sofisticados para hotelaria de luxo, incluindo móveis exclusivos, decoração contemporânea e amenities diferenciados.",
      image: hotelaria1Img,
      icon: Bed
    },
    {
      title: "Pisos Vinílicos Premium",
      description: "Pisos vinílicos de última geração com tecnologia antiderrapante, resistência superior e design moderno para ambientes comerciais e residenciais.",
      image: pisoImg,
      icon: Grid3X3
    },
    {
      title: "Painéis Arquitetônicos",
      description: "Painéis decorativos ripados premium para revestimento sofisticado e acabamento arquitetônico de alto padrão em projetos comerciais e residenciais.",
      image: painelImg,
      icon: Layers
    },
    {
      title: "Linha Travel Premium",
      description: "Malas executivas e acessórios de viagem de luxo com design inovador, materiais premium e funcionalidades inteligentes para o viajante moderno.",
      image: hotelaria2Img,
      icon: Luggage
    },
    {
      title: "Máquinas Compactadoras",
      description: "Compactadoras industriais de alta performance, disponíveis em versões a gasolina e elétricas, com tecnologia alemã para construção civil pesada.",
      image: academiaImg,
      icon: Truck
    },
    {
      title: "Móveis Corporativos",
      description: "Linha completa de móveis corporativos e residenciais com design contemporâneo italiano, materiais sustentáveis e ergonomia avançada.",
      image: hotelaria1Img,
      icon: Armchair
    },
    {
      title: "Metais Sanitários",
      description: "Torneiras e metais sanitários de luxo com tecnologia de economia de água, acabamento premium e design minimalista para banheiros e cozinhas modernas.",
      image: pisoImg,
      icon: Droplets
    }
  ];

  const handleCatalogClick = () => {
    window.open("https://catalogo.bmimports.com.br", "_blank");
  };

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      {/* Elementos decorativos premium */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-accent-blue/40 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="heading-primary-dark mb-8">
            Segmentos de Atuação
          </h2>
          <p className="text-xl leading-relaxed text-slate-300 max-w-5xl mx-auto">
            Atuamos estrategicamente em 8 setores distintos, oferecendo soluções completas, especializadas e customizadas 
            para cada necessidade específica do mercado brasileiro e internacional.
          </p>
        </div>

        {/* Grid de Segmentos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {segments.map((segment, index) => {
            const IconComponent = segment.icon;
            return (
              <div
                key={index}
                className={`group glass-effect rounded-3xl overflow-hidden hover:bg-white/15 motion-premium hover:-translate-y-3 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 120}ms` }}
              >
                {/* Imagem Premium */}
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                  <img 
                    src={segment.image} 
                    alt={segment.title}
                    className="w-full h-full object-cover group-hover:scale-110 motion-premium"
                  />
                  
                  {/* Ícone premium com cores alternadas */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-2xl flex items-center justify-center shadow-large ${
                    index % 3 === 0 ? 'glass-effect' : index % 3 === 1 ? 'bg-gradient-to-br from-red-500 to-red-600' : 'bg-gradient-accent'
                  }`}>
                    <IconComponent size={20} className="text-white" />
                  </div>
                  
                  {/* Overlay premium no hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-blue-900/95 opacity-0 group-hover:opacity-100 motion-premium flex items-center justify-center">
                    <button
                      onClick={handleCatalogClick}
                      className="bg-white text-slate-900 px-8 py-3 rounded-2xl font-semibold text-sm motion-premium hover:scale-105 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 shadow-premium"
                    >
                      Ver no Catálogo
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>

                {/* Conteúdo Premium */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-medium ${
                      index % 3 === 0 ? 'bg-gradient-accent' : index % 3 === 1 ? 'bg-gradient-to-br from-red-500 to-red-600' : 'bg-gradient-accent'
                    }`}>
                      <IconComponent size={18} className="text-white" />
                    </div>
                    <h3 className={`text-xl font-bold motion-safe ${
                      index % 3 === 1 ? 'text-white group-hover:text-red-300' : 'text-white group-hover:text-accent-blue'
                    }`}>
                      {segment.title}
                    </h3>
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed mb-6">
                    {segment.description}
                  </p>
                  
                  <button
                    onClick={handleCatalogClick}
                    className="w-full bg-white/10 hover:bg-red-500 text-white hover:text-white px-4 py-3 rounded-2xl font-semibold text-sm motion-premium flex items-center justify-center gap-2 group/btn border border-white/20 hover:border-transparent"
                  >
                    Ver no Catálogo
                    <ExternalLink size={14} className="group-hover/btn:rotate-12 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Principal Premium */}
        <div className={`text-center mt-20 transition-all duration-1000 ease-out delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button
            onClick={handleCatalogClick}
            className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded-2xl font-semibold text-lg motion-premium hover:scale-105 shadow-premium flex items-center gap-3 mx-auto relative overflow-hidden group"
          >
            <span className="relative z-10">Explore Nosso Catálogo Completo</span>
            <ExternalLink size={20} className="relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          <p className="text-slate-300 mt-6 text-sm font-medium">
            Mais de 1000 produtos disponíveis para importação
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurSegments;
