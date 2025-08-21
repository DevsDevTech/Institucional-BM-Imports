import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
      alert("Preencha todos os campos!");
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };
    emailjs
      .send(
        "service_eqftk98",
        "template_3vshfpd",
        templateParams,
        "qABTfAelWct2Gg9of"
      )
      .then((res) => {
        alert("E-mail enviado!");
        setName("");
        setEmail("");
        setMessage("");
      }, (err) => {
        console.log("ERRO: ", err)
      });
  };

  return (
    <div className="flex flex-col max-md:px-4 md:px-20 lg:px-40 xl:px-60 2xl:px-80 gap-5">
      <h2 className="text-center font-bold text-xl lg:text-2xl">
        Entre em contato com a nossa equipe
      </h2>
      <div className="flex flex-col rounded-xl bg-white shadow-md text-lg lg:text-xl p-4 gap-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center"
        >
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="">Nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-lg border-gray-200 border-1 p-2"
            />
            <label htmlFor="">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg border-gray-200 border-1 p-2"
            />
            <label htmlFor="">Mensagem</label>
            <textarea
              name=""
              id=""
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-lg border-gray-200 border-1 p-2 h-40"
            />
          </div>
          <button
            type="submit"
            className="p-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white w-30 cursor-pointer"
          >
            Enviar
          </button>
        </form>
        <p className="text-center font-semibold text-lg lg:text-2xl">OU</p>
        <div className="flex justify-around text-lg lg:text-2xl">
          <p>
            <span className="font-semibold">Telefone: </span>(xx) xxxx-xxxx
          </p>
          <p>
            <span className="font-semibold">E-mail: </span>
            contato@bmimports.com.br
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
