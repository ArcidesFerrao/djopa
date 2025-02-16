"use client";

import Job from "./Job";
import { useState } from "react";

interface JobData {
  id: number;
  company: string;
  position: string;
  location: string;
  salary: string;
  addedAt: string;
  expireDate: string;
}

export default function JobList() {
  const dados: JobData[] = [
    {
      id: 1,
      company: "DevHub",
      position: "Frontend Developer",
      location: "Maputo",
      salary: "$200,00",
      addedAt: new Date(2024, 11, 2).toDateString(),
      expireDate: new Date(2025, 5, 12).toDateString(),
    },
    {
      id: 2,
      company: "Inovante",
      position: "Backend Developer",
      location: "Maputo",
      salary: "$350,00",
      addedAt: new Date(2024, 12, 12).toDateString(),
      expireDate: new Date(2025, 1, 18).toDateString(),
    },
    {
      id: 3,
      company: "FarmHub",
      position: "Blockchain Developer",
      location: "Maputo",
      salary: "$750,00",
      addedAt: new Date(2024, 12, 12).toDateString(),
      expireDate: new Date(2025, 2, 1).toDateString(),
    },
    {
      id: 4,
      company: "Zamuka",
      position: "Blockchain Developer",
      location: "Maputo",
      salary: "$1050,00",
      addedAt: new Date(2024, 12, 12).toDateString(),
      expireDate: new Date(2025, 2, 2).toDateString(),
    },
  ];

  const [query, setQuery] = useState<string>("");

  const search = (dados: JobData[]) => {
    return dados.filter(
      (item) =>
        item.position.toLowerCase().includes(query.toLowerCase()) ||
        item.company.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <>
      <div className=" flex items-center justify-center shadow-[4px_4px_5px_0px_rgba(0,_0,_0,_0.15)] py-2 px-2 w-1/2 rounded-sm">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full"
          type="text"
          placeholder="Encontre vagas..."
        />
        <button
          onClick={() => setQuery("")}
          className="flex items-center justify-center border-l-2 px-2"
        >
          <span className="line-md--close-circle-filled"></span>
        </button>
      </div>

      <section className="jobs flex flex-col gap-4 w-full items-center justify-center">
        {dados &&
          search(dados).map((vaga: JobData) => (
            <Job
              key={vaga.id}
              company={vaga.company}
              position={vaga.position}
              location={vaga.location}
              salary={vaga.salary}
              addedAt={vaga.addedAt}
              expireDate={vaga.expireDate}
            />
          ))}
        <div></div>
      </section>
    </>
  );
}
