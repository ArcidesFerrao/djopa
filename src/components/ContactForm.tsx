"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [email, setEmail] = useState(" ");
  const [name, setName] = useState(" ");
  const [message, setMessage] = useState(" ");
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
    <form className="p-4 flex flex-col gap-y-4 w-4/6 " action={sendEmail}>
      {successMessage !== "" ? <div>{successMessage}</div> : ""}

      <div className="full-name flex">
        <div className="flex">
          <label htmlFor="name">Name</label>
          <input
            placeholder="Nome"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex">
          <label htmlFor="apelido">Apelido</label>

          <input
            placeholder="Apelido"
            type="text"
            name="apelido"
            id="apelido"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      {errorMessage !== "" ? <div>{errorMessage}</div> : ""}
      <input
        type="submit"
        value={loading ? "..." : "Enviar Mensagem"}
        id="enviar"
        disabled={loading}
      />
    </form>
  );
}

export function ContatoForm() {
  const [email, setEmail] = useState(" ");
  const [name, setName] = useState(" ");
  const [message, setMessage] = useState(" ");
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
    <form action="" className="form-contact flex flex-col gap-8">
      <div className="flex justify-between">
        <h3>Contacte-nos</h3>
        {successMessage !== "" ? <div>{successMessage}</div> : ""}
      </div>
      <div className="flex gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          id="name"
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
