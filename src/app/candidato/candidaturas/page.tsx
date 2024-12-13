"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import elipseload from "@/assets/Ellipsis.svg";
import React from "react";
import db from "@/db/db";

export default function CandidaturasPage() {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return <p>Sign in with Google</p>;
  }

  if (!session?.user)
    return <Image className="loading" src={elipseload} alt="loading" />;

  const candidaturas = async () => {
    const userId = session.user.id;

    return await db.application.findMany({
      where: {
        userId: userId,
      },
    });
  };
  const available = () => {
    return candidaturas.length === 0;
  };

  return (
    <main className="flex flex-col items-center gap-4">
      <h2>Candidaturas</h2>
      <p></p>
      <table>
        <thead>
          <tr>
            <th>Emprego</th>
            <th>Data</th>
            <th>Avaliado</th>
          </tr>
        </thead>
        <tbody>
          {available() ? (
            <tr></tr>
          ) : (
            <tr>
              <td>Devhub</td>
              <td>27-03-2025</td>
              <td>
                <span className="line-md--clipboard-check"></span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {available() && <span>0 candidaturas encontradas...</span>}
    </main>
  );
}
