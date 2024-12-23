import React from "react";

export default function ContactForm() {
  return (
    <form
      className="p-4 flex flex-col gap-y-4 w-4/6 "
      action="/api/sendEmail"
      method="POST"
    >
      <div className="full-name flex-col gap-4">
        <div className="flex">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="flex">
          <label htmlFor="apelido">Apelido</label>
          <input type="text" name="apelido" id="apelido" required />
        </div>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" required />
      </div>
      <div>
        <label htmlFor="assunto">Assunto</label>
        <input type="text" name="assunto" id="assunto" />
      </div>
      <div>
        <label htmlFor="mensagem">Mensagem</label>
      </div>
      <div className="">
        <textarea
          className="flex w-full h-16 rounded-sm"
          name="mensagem"
          id="mensagem"
          required
        ></textarea>
      </div>
      <input type="submit" value="Enviar Mensagem" id="enviar" />
    </form>
  );
}
