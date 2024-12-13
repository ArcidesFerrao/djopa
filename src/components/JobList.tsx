"use client";

import Job from "../app/emprego/_components/Job";
import { useState } from "react";

interface JobData {
  id: string;
  company: string;
  position: string;
  location: string;
  salary: string;
  addedAt: Date;
  expireDate: Date;
}

export default function JobList() {
  const dados: JobData[] = [
    {
      company: "DevHub",
      position: "Frontend Developer",
      location: "Maputo",
      salary: "$200,00",
      addedAt: "",
      expireDate: "",
      id: 1,
    },
    {
      company: "Inovante",
      position: "Backend Developer",
      location: "Maputo",
      salary: "$350,00",
      addedAt: "",
      expireDate: "",
      id: 2,
    },
    {
      company: "FarmHub",
      position: "Blockchain Developer",
      location: "Maputo",
      salary: "$750,00",
      addedAt: "",
      expireDate: "",
      id: 3,
    },
    {
      company: "Zamuka",
      position: "Blockchain Developer",
      location: "Maputo",
      salary: "$1050,00",
      addedAt: "",
      expireDate: "",
      id: 4,
    },
  ];

  const [query, setQuery] = useState<string>("");

  const search = (dados: JobData) => {
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
