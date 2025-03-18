import Job from "@/components/Job";
import db from "@/db/db";

export default async function JobsPage() {
  const jobs = getPosts();

  if ((await jobs).length === 0) {
    console.log("nenhuma vaga disponivel");
  }
  return (
    <main className="flex justify-between">
      <section className="job-filter p-4 h-fit rounded-lg">
        <div className="filter-header flex justify-between">
          <h3>Filtro</h3>
          <button>Clear</button>
        </div>
        <div className="p-4">
          <ul>
            <li>Maputo</li>
            <li>Sofala</li>
            <li>Nampula</li>
          </ul>
        </div>
      </section>
      <section className="jobs flex flex-col gap-4  items-center justify-center">
        {jobs &&
          (await jobs).map((vaga) => {
            console.log(
              `${vaga.expiresAt.getUTCDate()}/${vaga.expiresAt.getMonth()}/${vaga.expiresAt.getFullYear()}`
            );
            return (
              <Job
                key={vaga.id}
                id={vaga.id}
                company={vaga.company.name}
                type={vaga.type}
                position={vaga.title}
                location={vaga.location}
                salary={vaga.salary}
                // addedAt={vaga.addedAt}
                expireDate={`${vaga.expiresAt.getUTCDate()}/${vaga.expiresAt.getMonth()}/${vaga.expiresAt.getFullYear()}`}
              />
            );
          })}
      </section>
    </main>
  );
}

async function getPosts() {
  const jobsData = db.jobPost.findMany({
    select: {
      id: true,
      title: true,
      company: true,
      salary: true,
      location: true,
      type: true,
      expiresAt: true,
    },
  });

  return jobsData;
}
