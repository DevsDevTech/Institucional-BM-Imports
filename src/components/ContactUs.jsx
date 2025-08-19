import { useState } from "react";

function ContactUs() {
  return (
    <div className="flex flex-col px-4 gap-2">
      <h2 className="text-center font-semibold text-xl">Entre em contato com a nossa equipe</h2>
      <form action="" className="flex flex-col rounded-xl bg-white shadow-md p-4">
        <label htmlFor="">Nome</label>
        <input type="text" className="rounded-lg border-gray-200 border-1 px-2 py-4"/>
        <label htmlFor="">E-mail</label>
        <input type="email" />
        <label htmlFor="">Mensagem</label>
        <input type="text" />
      </form>
      <div>
        <p>Telefone: (xx) xxxx-xxxx</p>
        <p>E-mail: contato@bmimports.com.br</p>
      </div>
    </div>
  );
}

export default ContactUs;
