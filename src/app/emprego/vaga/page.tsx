"use client";

import { useSession } from "next-auth/react";
import VagaForm from "../_components/VagaForm";

export default function NovaVagaPage() {
  const { data: session } = useSession();
  if (!session)
    return (
      <main>
        <p>Login as an employer to be able to fill the form</p>
      </main>
    );
  return (
    <main className="flex flex-col items-center justify-center p-2 gap-4">
      <h3>Adicionar Vaga</h3>
      <VagaForm userId={session?.user.id} />
    </main>
  );
}
