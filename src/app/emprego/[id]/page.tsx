import db from "@/db/db";

export default async function JobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = await db.jobPost.findUnique({
    where: {
      id,
    },
  });

  if (!id) return <p>Vaga nao encontrada</p>;

  return (
    <main className="flex flex-col items-center gap-8 justify-center">
      <section className="job-info">
        <div className="job-post-header">
          <h2>{job?.title}</h2>
        </div>
        <div className="job-post-details">
          <div className="address-applications">
            <p>{job?.location}, Mozambique</p>
            <p>5 candidaturas</p>
          </div>
          <div className="about-job">
            <div className="description">
              <h4>Sobre a vaga</h4>
              <p>{job?.description}</p>
            </div>
            <div className="requirements">
              <h4>Requisitos</h4>
              <p>{job?.competencies}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
