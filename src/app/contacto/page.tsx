// import ContactForm from "@/components/ContactForm";
import React from "react";

export default function ContactoPage() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center p-2 ">
        {/* <h3>Contacte-nos</h3> */}
        <ContactForm />
      </div>
    </main>
  );
}

function ContactForm() {
  return (
    <form action="" className="form-contact flex flex-col gap-8">
      <div>
        <h3>Contacte-nos</h3>
      </div>
      <div className="flex gap-4">
        <input type="text" name="name" id="name" placeholder="Nome" />
        <input type="text" name="apelido" id="apelido" placeholder="Apelido" />
      </div>
      <div>
        <input
          className="w-full"
          type="text"
          name="telefone"
          id="telefone"
          placeholder="Numero de Telefone"
        />
      </div>
      <div>
        <input
          className="w-full"
          type="text"
          name="email"
          id="email"
          placeholder="Endereco Electronico"
        />
      </div>
      <div>
        <textarea
          className="w-full rounded-md p-4"
          placeholder="Como podemos ajudar?"
          name="mensagem"
          id="mensagem"
        ></textarea>
      </div>
      <div>
        <input type="submit" name="submit" id="submit" />
      </div>
    </form>
  );
}
