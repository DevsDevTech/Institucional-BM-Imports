import { Shield, Clock, Award, Headphones, Truck, DollarSign, CheckCircle, Globe } from "lucide-react";
import { useState, useEffect, useRef } from "react";

function BenefitsSection() {
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
  const benefits = [
    {
      icon: Shield,
      title: "Segurança e Confiabilidade",
      description: "Processos rigorosamente certificados e fornecedores internacionais homologados para garantir a excelência e qualidade superior dos produtos importados.",
      accentColor: "blue"
    },
    {
      icon: Clock,
      title: "Prazos Transparentes",
      description: "Cronogramas detalhados com acompanhamento em tempo real de todas as etapas da importação, desde a origem até a entrega final.",
      accentColor: "red"
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Controle de qualidade rigoroso e certificações internacionais em 100% dos produtos, garantindo conformidade total com padrões brasileiros.",
      accentColor: "red"
    },
    {
      icon: Headphones,
      title: "Suporte Especializado",
      description: "Equipe técnica altamente qualificada disponível para consultoria especializada, treinamento e suporte pós-venda diferenciado.",
      accentColor: "blue"
    },
    {
      icon: Truck,
      title: "Logística Nacional",
      description: "Rede de distribuição estratégica em todo território nacional com entrega expressa, rastreamento completo e segurança garantida.",
      accentColor: "red"
    },
    {
      icon: DollarSign,
      title: "Custo-Benefício Otimizado",
      description: "Condições comerciais exclusivas e otimização inteligente de custos para maximizar sua margem de lucro e competitividade no mercado.",
      accentColor: "blue"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-navy-dark relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="heading-primary-dark mb-8">
            Nossos Diferenciais
          </h2>
          <p className="text-xl leading-relaxed text-slate-300 max-w-4xl mx-auto">
            Oferecemos soluções completas e inovadoras em importação e distribuição internacional, 
            com foco absoluto na excelência operacional e no sucesso sustentável dos nossos parceiros comerciais.
          </p>
        </div>

        {/* Grid de Benefícios Premium (6 itens) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const isRed = benefit.accentColor === 'red';
            return (
              <div
                key={index}
                className={`group glass-effect rounded-3xl p-10 hover:bg-white/15 motion-premium hover:-translate-y-3 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-18 h-18 rounded-2xl mb-8 group-hover:scale-110 motion-premium shadow-large ${
                  isRed ? 'bg-gradient-to-br from-red-500 to-red-600' : 'bg-gradient-accent'
                }`}>
                  <IconComponent size={32} className="text-white" />
                </div>
                
                <h3 className={`text-xl font-bold mb-5 motion-safe ${
                  isRed ? 'text-white group-hover:text-red-200' : 'text-white group-hover:text-blue-200'
                }`}>
                  {benefit.title}
                </h3>
                
                <p className="text-slate-200 leading-relaxed text-sm">
                  {benefit.description}
                </p>

                {/* Elemento decorativo premium */}
                <div className={`mt-8 w-20 h-1 rounded-full opacity-0 group-hover:opacity-100 motion-safe ${
                  isRed ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-gradient-accent'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section Premium */}
        <div className={`text-center mt-20 transition-all duration-1000 ease-out delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-effect rounded-3xl p-12 lg:p-16 border border-white/10">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Pronto para Importar com Segurança?
            </h3>
            <p className="text-subtitle-dark mb-10 max-w-3xl mx-auto">
              Entre em contato conosco e descubra como podemos otimizar seus processos de importação 
              e distribuição com nossa experiência comprovada.
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contato');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded-2xl font-semibold text-lg motion-premium hover:scale-105 shadow-premium relative overflow-hidden group"
            >
              <span className="relative z-10">Fale Conosco</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
