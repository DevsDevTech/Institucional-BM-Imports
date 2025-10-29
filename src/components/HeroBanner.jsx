import { ArrowRight, ExternalLink, ChevronDown } from "lucide-react";
import { forwardRef, useState, useEffect } from "react";
import heroBannerImage from "../assets/img/heroBanner.jfif";
import fachadaImage from "../assets/img/fachada.jpg";

const HeroBanner = forwardRef(({ refs, onScroll }, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCatalogClick = () => {
    window.open("https://catalogo.bmimports.com.br", "_blank");
  };

  const handleScrollToAbout = () => {
    onScroll?.(refs?.aboutRef);
  };

  return (
    <section
      ref={ref}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background com imagem real */}
      <div className="absolute inset-0 z-0">
        <img 
          src={fachadaImage} 
          alt="Fachada BM Imports" 
          className="w-full h-full object-cover"
        />
        {/* Overlay premium com gradiente sofisticado */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        {/* Overlay glass para modernidade */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className={`transition-all duration-1200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="heading-display mb-8">
            BM Imports
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-200 mb-6 tracking-wide">
            Importadora & Distribuidora
          </p>
          
          <p className={`text-subtitle-dark mb-8 max-w-4xl mx-auto transition-all duration-1000 ease-out delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Excelência em importação e distribuição de produtos para todo o Brasil
          </p>
          
          <p className={`text-body-dark mb-12 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Conectamos fornecedores internacionais a clientes locais, oferecendo produtos com qualidade, prazos claros e suporte técnico especializado.
          </p>

          {/* CTAs Premium */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 ease-out delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button
              onClick={handleCatalogClick}
              className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg motion-premium hover:scale-105 flex items-center gap-3 shadow-premium group relative overflow-hidden"
            >
              <span className="relative z-10">Conheça Nosso Catálogo</span>
              <ExternalLink size={20} className="relative z-10 group-hover:rotate-12 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            
            <button
              onClick={handleScrollToAbout}
              className="glass-effect text-white px-10 py-4 rounded-2xl font-medium text-lg motion-premium hover:scale-105 hover:bg-white/20 flex items-center gap-3"
            >
              Saiba Mais
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
      </div>
      {/* Elementos decorativos modernos */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-red-400/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 right-8 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
      {/* Elementos geométricos sutis */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-blue-300/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={handleScrollToAbout}
            className="text-white/70 hover:text-white transition-all-smooth"
          >
            <ChevronDown size={32} />
          </button>
        </div>
    </section>
  );
});

HeroBanner.displayName = "HeroBanner";

export default HeroBanner;
