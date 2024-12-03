"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import elipseload from "@/assets/Ellipsis.svg";
import React, { useState } from "react";
import db from "@/db/db";

export default function CandidaturasPage() {
  const { data: session, status } = useSession();
  const [available, setAvailable] = useState(false);

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

  if (candidaturas.length === 0) setAvailable(true);

  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full">
      <h2>Candidaturas</h2>
      <p></p>
      <table className="">
        <thead>
          <tr>
            <th>Emprego</th>
            <th>Data</th>
            <th>Avaliado</th>
          </tr>
        </thead>
        <tbody>
          {!available && (
            <tr>
              <td>0 candidaturas encontradas...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
