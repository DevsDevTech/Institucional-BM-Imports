import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";
import { IMaskInput } from "react-imask";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [tel, setTel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() == "" ||
      email.trim() == "" ||
      message.trim() == "" ||
      tel.trim() == ""
    ) {
      alert("Preencha todos os campos obrigatórios!");
    } else {
      const templateParams = {
        from_name: name,
        email: email,
        message: message,
        company: company,
        tel: tel,
      };
      emailjs
        .send(
          import.meta.env.VITE_EMAIL_SERVICE,
          import.meta.env.VITE_EMAIL_TEMPLATE,
          templateParams,
          import.meta.env.VITE_PUBLIC_API_KEY
  
        )
        .then(
          (res) => {
            alert("E-mail enviado!");
            setName("");
            setEmail("");
            setMessage("");
            setCompany("");
            setTel("");
          },
          (err) => {
            alert("Erro ao enviar e-mail, tente novamente!");
            console.log(err)
          }
        );
    }
  };

  return (
    <div className="flex flex-col max-md:px-4 md:px-6 lg:px-40 xl:px-60 2xl:px-80 gap-5">
      <div className="flex flex-col items-center text-center gap-3">
        <p className="bg-white/50 text-white p-1 rounded-4xl max-lg:text-sm lg:text-md text-center w-34">
          Entre em contato
        </p>
        <h2 className="text-center font-bold max-lg:text-3xl lg:text-4xl text-white">
          Fale com nossos especialistas
        </h2>
        <p className="text-white text-center max-lg:text-xl lg:text-2xl">
          Estamos prontos para te atender e encontrar a melhor solução para o
          seu negócio.
        </p>
      </div>
      <div className="flex max-md:flex-col md:flex-row gap-4 h-full xl:px-40 2xl:px-60">
        <div className="flex flex-col max-md:gap-3 md:w-2/5 md:gap-5 md:justify-center">
          <div className="flex flex-row rounded-xl justify-center items-center bg-white shadow-md text-lg lg:text-xl p-6 gap-6">
            <div className="bg-blue-700/10 rounded-full p-2 h-[38px] w-[38px]">
              <Mail className="text-[#00003d]" size={20} />
            </div>
            <div className="w-9/10">
              <p className="font-semibold">Email</p>
              <p>contato@bmimports.com.br</p>
            </div>
          </div>
          <div className="flex flex-row rounded-xl justify-center items-center bg-white shadow-md text-lg lg:text-xl p-6 gap-6">
            <div className="bg-blue-700/10 rounded-full p-2 h-[38px] w-[38px]">
              <Phone className="text-[#00003d]" size={20} />
            </div>
            <div className="w-9/10">
              <p className="font-semibold">Telefone</p>
              <p>(11) 98997-2671</p>
            </div>
          </div>
          <div className="flex flex-row rounded-xl justify-center items-center bg-white shadow-md text-lg lg:text-xl p-6 gap-6">
            <div className="bg-blue-700/10 rounded-full p-2 h-[38px] w-[38px]">
              <MapPin className="text-[#00003d]" size={20} />
            </div>
            <div className="w-9/10">
              <p className="font-semibold">Endereços</p>
              <div>
                <p className="font-semibold">Importadora: </p>
                <p>Rua Joao Thomaz Pinto, 1570</p>
                <p>Itajaí 88313-045, BR</p>
              </div>
              <div>
                <p className="font-semibold">Exportadora:</p>
                <p>R. Adolfo André, 497 - Centro</p>
                <p>Atibaia - SP, 12940-280, BR</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-xl bg-white shadow-md text-lg lg:text-xl p-6 gap-6 md:w-3/5">
          <h3 className="font-semibold max-lg:text-xl lg:text-2xl">
            Envie sua mensagem
          </h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-center"
          >
            <div className="flex flex-col w-full gap-2">
              <div className="flex max-md:flex-col md:flex-row max-lg:gap-2 lg:gap-6">
                <div className="flex flex-col md:w-1/2">
                  <label htmlFor="">
                    Nome <span className="text-red-600 md:w-1/2">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="rounded-md border-gray-200 border-1 p-2 shadow-sm"
                  />
                </div>
                <div className="flex flex-col md:w-1/2">
                  <label htmlFor="">Empresa</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Nome da empresa"
                    className="rounded-md border-gray-200 border-1 p-2 shadow-sm"
                  />
                </div>
              </div>
              <div className="flex max-md:flex-col md:flex-row max-lg:gap-2 lg:gap-6">
                <div className="flex flex-col md:w-1/2">
                  <label htmlFor="">
                    E-mail <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    placeholder="Seu email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-md border-gray-200 border-1 p-2 shadow-sm"
                  />
                </div>
                <div className="flex flex-col md:w-1/2">
                  <label htmlFor="">
                    Telefone <span className="text-red-600">*</span>
                  </label>
                  <IMaskInput
                    id="telefone"
                    mask="(00) 00000-0000"
                    value={tel}
                    onAccept={(value) => setTel(value)}
                    placeholder="(xx) xxxxx-xxxx"
                    className="rounded-md border-gray-200 border p-2 shadow-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="">
                  Mensagem <span className="text-red-600">*</span>
                </label>
                <textarea
                  name=""
                  id=""
                  value={message}
                  placeholder="Sua mensagem"
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-md border-gray-200 border-1 p-2 h-40 shadow-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              className="p-2 rounded-md bg-[#00003d] hover:bg-[#0a0a81] text-white font-semibold w-50 cursor-pointer"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
