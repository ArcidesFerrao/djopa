export default async function JobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!id) return <p>Vaga nao encontrada</p>;

  return (
    <main>
      <p>{id}</p>
    </main>
  );
}
