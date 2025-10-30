import { Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logoBranca.png";
import megaTradingLogo from "../assets/megatrading.png";
import nobreTradingLogo from "../assets/nobretrading.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Missão", href: "#missao" },
    { label: "Segmentos", href: "#segmentos" },
    { label: "Parceiros", href: "#parceiros" },
    { label: "Contato", href: "#contato" }
  ];

  const segments = [
    "Equipamentos de Academia", "Setor Hoteleiro", "Pisos Vinílicos Premium", "Painéis Arquitetônicos",
    "Linha Travel Premium", "Máquinas Compactadoras", "Móveis Corporativos", "Metais Sanitários"
  ];

  const handleCatalogClick = () => {
    window.open("https://catalogo.bmimports.com.br", "_blank");
  };

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-corporate-red/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-primary-blue/10 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img src={logo} alt="BM Imports" className="h-10 w-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">BM Imports</h3>
                <p className="text-slate-300 leading-relaxed">
                  Consultoria e assessoria altamente especializada em importação e distribuição internacional, 
                  conectando fornecedores premium globais a clientes locais com excelência, qualidade superior e confiança absoluta.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-300">Siga-nos:</span>
                <a
                  href="https://www.instagram.com/bm.shop_br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-corporate-red transition-all-smooth hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-300 hover:text-white transition-all-smooth hover:translate-x-1"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={handleCatalogClick}
                    className="text-gray-300 hover:text-corporate-red transition-all-smooth hover:translate-x-1 flex items-center gap-2"
                  >
                    Catálogo
                    <ExternalLink size={14} />
                  </button>
                </li>
              </ul>
            </div>

            {/* Segments */}
            <div>
              <h4 className="text-lg font-bold mb-6">Segmentos</h4>
              <ul className="space-y-3">
                {segments.map((segment, index) => (
                  <li key={index}>
                    <span className="text-gray-300 text-sm">
                      {segment}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-corporate-red mt-1 flex-shrink-0" />
                  <div>
                    <a
                      href="mailto:contato@bmimports.com.br"
                      className="text-gray-300 hover:text-white transition-all-smooth"
                    >
                      contato@bmimports.com.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-corporate-red mt-1 flex-shrink-0" />
                  <div>
                    <a
                      href="tel:+5511989972671"
                      className="text-gray-300 hover:text-white transition-all-smooth"
                    >
                      (11) 98997-2671
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-corporate-red mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <div className="mb-2">
                      <p className="font-semibold text-white">Importadora:</p>
                      <p className="text-sm">Rua Joao Thomaz Pinto, 1570</p>
                      <p className="text-sm">Itajaí 88313-045, BR</p>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Loja física:</p>
                      <p className="text-sm">R. Adolfo André, 497 - Centro</p>
                      <p className="text-sm">Atibaia - SP, 12940-280, BR</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h4 className="text-lg font-bold mb-8 text-white">Nossos Parceiros</h4>
              <div className="flex justify-center items-center gap-12">
                {/* Logos Reais dos Parceiros */}
                <div className="glass-effect rounded-2xl p-6 hover:bg-white/15 motion-premium hover:scale-105">
                  <div className="w-40 h-16 bg-white rounded-xl flex items-center justify-center p-3 shadow-medium">
                    <img 
                      src={nobreTradingLogo} 
                      alt="Nobre Trading"
                      className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="glass-effect rounded-2xl p-6 hover:bg-white/15 motion-premium hover:scale-105">
                  <div className="w-40 h-16 bg-white rounded-xl flex items-center justify-center p-3 shadow-medium">
                    <img 
                      src={megaTradingLogo} 
                      alt="Mega Trading"
                      className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-300">
                <p>© {currentYear} Bm Imports Comercio Internacional LTDA - 34.091.863/0001-33. Todos os direitos reservados.</p>
                <span className="hidden md:block">|</span>
                <p>DevTech Softwares</p>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <Link 
                  to="/policy" 
                  className="text-gray-300 hover:text-white transition-all-smooth"
                >
                  Política de Privacidade
                </Link>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-300 hover:text-corporate-red transition-all-smooth"
                >
                  Voltar ao Topo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
