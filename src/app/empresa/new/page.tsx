import CompanyForm from "@/app/_components/CompanyForm";
import React from "react";

export default function NovaEmpresaPage() {
  return (
    <main className="flex flex-col items-center p-4 gap-4">
      <div className="new-company-header">
        <h3>Registar Nova Empresa</h3>
      </div>
      <CompanyForm />
    </main>
  );
}
