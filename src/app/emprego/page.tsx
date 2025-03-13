// "use client";

import Job from "@/components/Job";
// import JobList from "@/components/JobList";
import db from "@/db/db";

export default async function JobsPage() {
  const jobs = getPosts();

  if ((await jobs).length === 0) {
    console.log("nenhuma vaga disponivel");
  }
  return (
    <main className="flex flex-col items-center gap-8 justify-center">
      {/* <JobList /> */}
      <section className="jobs flex flex-col gap-4 w-full items-center justify-center">
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
