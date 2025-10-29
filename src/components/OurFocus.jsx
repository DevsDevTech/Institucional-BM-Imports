import {
  CheckCircle,
  Settings,
  Shield,
  Truck,
  Calculator,
  FileText,
  Handshake,
  Headphones,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

function OurFocus() {
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
  const missionItems = [
    {
      icon: Settings,
      title: "Desenvolvimento de Fornecedores",
      description: "Identificação, qualificação e desenvolvimento de parceiros internacionais com histórico comprovado de excelência, qualidade superior e confiabilidade operacional."
    },
    {
      icon: Shield,
      title: "Certificação de Qualidade",
      description: "Processo rigoroso de inspeção técnica e certificação internacional para garantir que 100% dos produtos atendam aos mais altos padrões de qualidade."
    },
    {
      icon: CheckCircle,
      title: "Validação de Capacidade",
      description: "Auditoria completa da capacidade produtiva, logística e operacional dos fornecedores para assegurar cumprimento de prazos e volumes."
    },
    {
      icon: Calculator,
      title: "Otimização Tributária",
      description: "Consultoria tributária especializada e estratégica para maximizar benefícios fiscais, reduzir custos e garantir total conformidade legal."
    },
    {
      icon: FileText,
      title: "Estruturação de Incoterms",
      description: "Definição estratégica e negociação dos termos comerciais internacionais mais vantajosos para cada operação específica de importação."
    },
    {
      icon: Handshake,
      title: "Negociação de Benefícios",
      description: "Estruturação de condições especiais, benefícios exclusivos e vantagens comerciais adicionais através de relacionamentos estratégicos de longo prazo."
    },
    {
      icon: Truck,
      title: "Condições Comerciais",
      description: "Negociação e estruturação de condições comerciais altamente competitivas, incluindo preços diferenciados, prazos flexíveis e modalidades de pagamento."
    },
    {
      icon: Headphones,
      title: "Suporte Pós-Venda Premium",
      description: "Acompanhamento contínuo, suporte técnico especializado 24/7 e garantia estendida para assegurar máxima satisfação e fidelização do cliente."
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-zinc-50 relative overflow-hidden">
      {/* Elementos decorativos sutis */}
      <div className="absolute top-20 left-10 w-60 h-60 bg-accent-blue/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="heading-primary mb-8">
            Missão Estratégica
          </h2>
          <p className="text-xl leading-relaxed text-slate-600 max-w-5xl mx-auto">
            Nossa metodologia proprietária oferece consultoria e assessoria altamente especializada para importar e distribuir com 
            máxima segurança, reduzindo significativamente riscos operacionais e otimizando custos em cada etapa crítica do processo.
          </p>
        </div>

        {/* Grid de Missões Premium */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missionItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-3xl p-8 shadow-medium hover:shadow-large motion-premium hover:-translate-y-3 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 120}ms` }}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 group-hover:scale-110 motion-premium shadow-medium ${
                    index % 3 === 1 ? 'bg-gradient-to-br from-red-500 to-red-600' : 'bg-gradient-accent'
                  }`}>
                    <IconComponent size={28} className="text-white" />
                  </div>
                  
                  <h3 className={`text-lg font-bold mb-4 motion-safe ${
                    index % 3 === 1 ? 'text-slate-800 group-hover:text-accent-red' : 'text-slate-800 group-hover:text-accent-blue'
                  }`}>
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  {/* Elemento decorativo premium */}
                  <div className={`mt-6 w-12 h-1 rounded-full opacity-0 group-hover:opacity-100 motion-safe ${
                    index % 3 === 1 ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-gradient-accent'
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Premium */}
        <div className={`text-center mt-20 transition-all duration-1000 ease-out delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-6 bg-white rounded-2xl px-10 py-5 shadow-large border border-slate-200">
            <div className="w-3 h-3 bg-accent-blue rounded-full animate-pulse"></div>
            <p className="text-slate-800 font-bold text-lg">
              Metodologia estruturada e comprovada para importações 100% seguras e altamente eficientes
            </p>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurFocus;
