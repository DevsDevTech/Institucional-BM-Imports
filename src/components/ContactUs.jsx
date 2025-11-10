import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { IMaskInput } from "react-imask";

function ContactUs() {
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    tel: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim() || !formData.tel.trim()) {
      setSubmitStatus({ type: 'error', message: 'Preencha todos os campos obrigatórios!' });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        {
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
          company: formData.company,
          tel: formData.tel,
        },
        import.meta.env.VITE_PUBLIC_API_KEY
      );
      
      setSubmitStatus({ type: 'success', message: 'Mensagem enviada com sucesso!' });
      setFormData({ name: "", email: "", message: "", company: "", tel: "" });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Erro ao enviar mensagem. Tente novamente!' });
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Corporativo",
      info: "contato@bmimports.com.br",
      link: "mailto:contato@bmimports.com.br"
    },
    {
      icon: Phone,
      title: "Telefone Direto",
      info: "(11) 98997-2671",
      link: "tel:+5511989972671"
    },
    {
      icon: MapPin,
      title: "Nossas Unidades",
      info: [
        { label: "Sede Importadora", address: "Rua Joao Thomaz Pinto, 1570", city: "Itajaí 88313-045, SC - Brasil" },
        { label: "Distribuidora e Showroom", address: "R. Adolfo André, 497 - Centro", city: "Atibaia 12940-280, SP - Brasil" }
      ]
    },
    {
      icon: Clock,
      title: "Horário Comercial",
      info: "Segunda à Sexta: 8h às 17h"
    }
  ];

  return (
    <section ref={sectionRef} id="contato" className="py-24 lg:py-32 bg-neutral-900 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-20 w-60 h-60 bg-accent-blue/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="heading-primary mb-8">
            Fale Conosco
          </h2>
          <p className="text-xl leading-relaxed text-slate-800 max-w-5xl mx-auto">
            Nossa equipe de especialistas está pronta para atender você com excelência e encontrar as melhores soluções estratégicas para o seu negócio. 
            Entre em contato através dos nossos canais diretos ou preencha o formulário detalhado abaixo para uma consultoria personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Informações de Contato */}
          <div className={`space-y-8 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-neutral-800 rounded-3xl p-8 shadow-medium hover:shadow-large motion-premium group border border-neutral-700">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 motion-premium shadow-medium ${
                        index % 2 === 0 ? 'bg-gradient-accent' : 'bg-gradient-to-br from-red-500 to-red-600'
                      }`}>
                        <IconComponent size={22} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className={`text-lg font-bold mb-3 motion-safe text-white`}>
                        {item.title}
                      </h3>
                      {Array.isArray(item.info) ? (
                        <div className="space-y-4">
                          {item.info.map((location, idx) => (
                            <div key={idx}>
                              <p className="font-semibold text-neutral-200">{location.label}:</p>
                              <p className="text-neutral-200">{location.address}</p>
                              <p className="text-neutral-200">{location.city}</p>
                            </div>
                          ))}
                        </div>
                      ) : item.link ? (
                        <a 
                          href={item.link} 
                          className="text-neutral-200 hover:text-accent-red motion-safe font-medium"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-neutral-200 font-medium">{item.info}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Formulário Premium */}
          <div className={`bg-neutral-800 rounded-3xl p-10 shadow-premium transition-all duration-1000 ease-out delay-500 border border-neutral-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-2xl font-bold text-white mb-8">
              Envie sua Mensagem
            </h3>

            {submitStatus && (
              <div className={`mb-8 p-6 rounded-2xl flex items-center gap-4 shadow-medium ${
                submitStatus.type === 'success' ? 'bg-green-950 text-green-300 border border-green-800' : 'bg-red-950 text-red-300 border border-red-800'
              }`}>
                {submitStatus.type === 'success' ? <CheckCircle size={22} /> : <Mail size={22} />}
                <span className="font-medium">{submitStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-300 mb-3">
                    Nome <span className="text-accent-red">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full px-5 py-4 bg-neutral-900 text-neutral-100 border border-neutral-700 rounded-2xl focus:ring-2 focus:ring-accent-blue focus:border-transparent motion-safe shadow-soft"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-300 mb-3">
                    Empresa
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Nome da empresa"
                    className="w-full px-5 py-4 bg-neutral-900 text-neutral-100 border border-neutral-700 rounded-2xl focus:ring-2 focus:ring-accent-blue focus:border-transparent motion-safe shadow-soft"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-neutral-300 mb-3">
                    E-mail <span className="text-accent-red">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full px-5 py-4 bg-neutral-900 text-neutral-100 border border-neutral-700 rounded-2xl focus:ring-2 focus:ring-accent-blue focus:border-transparent motion-safe shadow-soft"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-300 mb-3">
                    Telefone <span className="text-accent-red">*</span>
                  </label>
                  <IMaskInput
                    mask="(00) 00000-0000"
                    value={formData.tel}
                    onAccept={(value) => handleInputChange('tel', value)}
                    placeholder="(11) 99999-9999"
                    className="w-full px-5 py-4 bg-neutral-900 text-neutral-100 border border-neutral-700 rounded-2xl focus:ring-2 focus:ring-accent-blue focus:border-transparent motion-safe shadow-soft"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-300 mb-3">
                  Mensagem <span className="text-accent-red">*</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Conte-nos sobre seu projeto ou necessidade..."
                  rows={6}
                  className="w-full px-5 py-4 bg-neutral-900 text-neutral-100 border border-neutral-700 rounded-2xl focus:ring-2 focus:ring-accent-blue focus:border-transparent motion-safe resize-none shadow-soft"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 px-8 rounded-2xl font-bold text-lg motion-premium flex items-center justify-center gap-3 relative overflow-hidden group ${
                  isSubmitting 
                    ? 'bg-neutral-700 cursor-not-allowed' 
                    : 'bg-red-500 hover:bg-red-600 hover:scale-105 shadow-premium'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span className="relative z-10">Enviando...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">Enviar Mensagem</span>
                    <Send size={20} className="relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;