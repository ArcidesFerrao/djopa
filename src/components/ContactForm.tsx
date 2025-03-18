"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = () => {
    if (!email) {
      setErrorMessage("Insira o email");
      return;
    }

    if (!message) {
      setErrorMessage("Insira a mensagem");
      return;
    }

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_e2pgi6v",
        "contact-form",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_KEY
      )
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setLoading(false);
          setSuccessMessage("Mensagem enviada com sucesso!");
          console.log("SUCCESS!");
        },
        (error) => {
          console.error("FAILED...", error.text);
          setErrorMessage("Ocorreu um error, tente novamente");
          setLoading(false);
        }
      );
  };
  return (
    <form action={sendEmail} className="form-contact flex flex-col gap-8">
      <div className="flex justify-between">
        <h3>Contacte-nos</h3>
        {successMessage !== "" ? <div>{successMessage}</div> : ""}
      </div>
      <div className="flex gap-4">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Endereco Electronico"
        />
      </div>
      <div>
        <textarea
          className="w-full rounded-md p-4"
          placeholder="Como podemos ajudar?"
          name="mensagem"
          id="mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      {errorMessage !== "" ? <div>{errorMessage}</div> : ""}

      <div>
        <input
          type="submit"
          name="submit"
          id="enviar"
          value={loading ? "..." : "Enviar Mensagem"}
          disabled={loading}
        />
      </div>
    </form>
  );
}

export function ContactSideBar() {
  return (
    <section className="contact-sidebar flex flex-col gap-4">
      <div>
        <h4>Telefone</h4>
        <p>+258 82 1234567</p>
      </div>
      <div>
        <h4>E-mail</h4>
        <p>contacto@djopa.com</p>
      </div>
      <div>
        <h4>Endereco</h4>
        <p>Maputo, Mozambique</p>
      </div>
    </section>
  );
}
