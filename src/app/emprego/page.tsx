import SearchBar from "@/components/SearchBar";
import React from "react";
import Job from "./_components/Job";
import db from "@/db/db";

export default function EmpregoPage() {
  const dados = [
    {
      company: "DevHub",
      position: "Frontend Developer",
      location: "Maputo",
      salary: "$200,00",
      addedAt: "",
      expireDate: "",
    },
    {
      company: "Inovante",
      position: "Backend Developer",
      location: "Maputo",
      salary: "$350,00",
      addedAt: "",
      expireDate: "",
    },
    {
      company: "FarmHub",
      position: "Blockchain Developer",
      location: "Maputo",
      salary: "$750,00",
      addedAt: "",
      expireDate: "",
    },
    {
      company: "Zamuka",
      position: "Blockchain Developer",
      location: "Maputo",
      salary: "$1050,00",
      addedAt: "",
      expireDate: "",
    },
  ];

  const vagas = async () => {
    await db.jobPost.findMany({
      select: {
        createdAt: true,
        employer: true,
        location: true,
        salary: true,
        title: true,
        id: true,
      },
    });
  };

  if (vagas.length === 0) {
    return (
      <div className="empregos flex py-4 items-center justify-center">
        <p>0 vagas disponiveis</p>
      </div>
    );
  }

  return (
    <div className="empregos flex flex-col py-4 gap-8 items-center justify-center">
      <SearchBar />

      <section className="jobs flex flex-col gap-4 w-full items-center justify-center">
        {dados.map((vaga, index) => (
          <Job
            key={index}
            company={vaga.company}
            position={vaga.position}
            location={vaga.location}
            salary={vaga.salary}
            addedAt={vaga.addedAt}
            expireDate={vaga.expireDate}
          />
        ))}
        <div>
          {vagas.map((vaga) => (
            <Job key={vaga.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
