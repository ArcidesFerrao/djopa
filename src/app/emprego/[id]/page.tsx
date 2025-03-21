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
    <main className="flex justify-between">
      <section className="job-info h-fit flex flex-col gap-5">
        <div className="job-post-header flex justify-between">
          <h2>{job?.title}</h2>
          <button>Candidatar-me</button>
        </div>
        <div className="address-applications flex gap-6">
          <p>{job?.location}</p>
          <p>MZN 60 000,00</p>
          <p>Valido ate 25/03/2025</p>
          <p>5 candidaturas</p>
        </div>
        <div className="about-job flex flex-col gap-5">
          <div className="description">
            <h3>Sobre a vaga</h3>
            <p>{job?.description}</p>
          </div>
          <div className="job-requirements">
            <h3>Requisitos</h3>
            <p>{job?.competencies}</p>
          </div>
          <div className="job-benefits">
            <h3>Beneficios</h3>
            <p>{job?.competencies}</p>
          </div>
        </div>
      </section>
      <section className="similar-jobs flex flex-col gap-5">
        <h3>Outras vagas</h3>
        <div className="similar-list flex flex-col items-center justify-center gap-5">
          <JobCard />
          <JobCard />
        </div>
      </section>
    </main>
  );
}

export function JobCard() {
  return (
    <div className="job-card flex flex-col justify-between">
      <h4>Job title</h4>
      <h4>Company Name</h4>
      <div className="flex justify-between">
        <p>Maputo</p>
        <p>Valido ate 25/03/2025</p>
      </div>
    </div>
  );
}
