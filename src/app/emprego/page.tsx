import SearchBar from "@/components/SearchBar";
import React from "react";
import Job from "./_components/Job";

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
      </section>
    </div>
  );
}
