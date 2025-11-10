import { Menu, X, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import logoW from "../assets/img/logoBranca.png";

function Header({ onScroll, refs }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCatalogClick = () => {
    window.open("https://catalogo.bmimports.com.br", "_blank");
  };

  const menuItems = [
    { label: "Home", ref: refs?.homeRef },
    { label: "Sobre Nós", ref: refs?.aboutRef },
    { label: "Diferenciais", ref: refs?.benefitsRef },
    { label: "Missão", ref: refs?.missionRef },
    { label: "Segmentos", ref: refs?.segmentsRef },
    { label: "Parceiros", ref: refs?.partnersRef },
    { label: "Contato", ref: refs?.contactRef },
  ];

  const handleMenuClick = (ref) => {
    onScroll?.(ref);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="fixed w-full top-0 z-50 transition-all-smooth bg-neutral-900/90 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div
            onClick={() => handleMenuClick(refs?.homeRef)}
            className="cursor-pointer transition-all-smooth hover:scale-105"
          >
            <img
              src={logoW}
              alt="BM Imports"
              className="h-8 lg:h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleMenuClick(item.ref)}
                className="font-medium text-white hover:text-accent-blue motion-safe hover:scale-105 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-red-500"></span>
              </button>
            ))}

            {/* CTA Button */}
            <button
              onClick={handleCatalogClick}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded-2xl font-semibold motion-premium hover:scale-105 flex items-center gap-2 shadow-large relative overflow-hidden group"
            >
              <span className="relative z-10">Acessar Catálogo</span>
              <ExternalLink size={16} className="relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md transition-all-smooth text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-neutral-900/95 backdrop-blur-md shadow-lg transition-all-smooth ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleMenuClick(item.ref)}
                className="block w-full text-left font-medium text-neutral-200 hover:text-accent-blue motion-safe py-3 border-b border-neutral-800 last:border-b-0"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleCatalogClick}
              className="w-full bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl font-semibold motion-premium flex items-center justify-center gap-2 mt-6 shadow-medium"
            >
              Acessar Catálogo
              <ExternalLink size={16} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;