import VagaForm from "../../_components/VagaForm";

export default function NovaVagaPage() {
  return (
    <main className="new-job flex flex-col items-center justify-center p-4 gap-4">
      <h3 className="font-semibold">Adicionar Vaga</h3>

      <VagaForm />
    </main>
  );
}
