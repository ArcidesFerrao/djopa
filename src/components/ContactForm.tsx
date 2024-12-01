import React from "react";

export default function ContactForm() {
  return (
    <form className="p-4 flex flex-col gap-y-4 w-4/6 ">
      <div className="full-name">
        <div className="flex gap-x-4">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="flex gap-x-4">
          <label htmlFor="apelido">Apelido</label>
          <input type="text" name="apelido" id="apelido" />
        </div>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="assunto">Assunto</label>
        <input type="text" name="assunto" id="assunto" />
      </div>
      <div>
        <label htmlFor="mensagem">Mensagem</label>
        <input type="text" name="mensagem" id="mensagem" />
      </div>
    </form>
  );
}
