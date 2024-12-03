"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import elipseload from "@/assets/Ellipsis.svg";
import React from "react";

export default function CandidaturasPage() {
  const { data: session, status } = useSession();

  if (!session?.user)
    return <Image className="loading" src={elipseload} alt="loading" />;
  return (
    <div>
      <h2>Candidaturas</h2>
      <p></p>
      <table>
        <thead>
          <th>
            <td>Emprego</td>
            <td>Data</td>
            <td>Avaliado</td>
          </th>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
