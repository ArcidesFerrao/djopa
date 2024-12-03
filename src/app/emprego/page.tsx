"use client";

// import SearchBar from "@/components/SearchBar";
// import React, { useEffect, useState } from "react";
import Job from "./_components/Job";
import { useState } from "react";

// import db from "@/db/db";
// import elipseload from "@/assets/Ellipsis.svg";
// import Image from "next/image";

interface JobData {
  id: string;
  company: string;
  position: string;
  salary: string;
  addedAt: Date;
  expireDate: Date;
}

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

  const [query, setQuery] = useState<string>("");

  const search = (dados) => {
    return dados.filter(
      (item: { position: string; company: string }) =>
        (item.position.toLowerCase() || "").includes(query) ||
        (item.company.toLowerCase() || "").includes(query)
    );
  };

  return (
    <main>
      <div className="empregos flex flex-col py-4 gap-8 items-center justify-center">
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
          {search(dados).map((vaga, index) => (
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
          <div></div>
        </section>
      </div>
    </main>
  );
}
