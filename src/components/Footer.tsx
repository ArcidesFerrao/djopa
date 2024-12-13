import React from "react";
import { NavLink } from "./Nav";

export default function Footer() {
  return (
    <div
      className="footer flex flex-col
    gap-8"
    >
      <div className="footer-links flex flex-col gap-4  ">
        <NavLink href="/about">Sobre nos</NavLink>
        <NavLink href="/contact">Contacte-nos</NavLink>
        <NavLink href="/">Vagas</NavLink>
      </div>
      <div className="footer-rights flex justify-between">
        <p>Criado por: Arcides Ferrao</p>
        <p>© 2024 - Todos direitos reservados</p>
      </div>
    </div>
  );
}
