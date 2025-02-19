"use client";

import JobList from "@/components/JobList";
import { useSession } from "next-auth/react";
import React from "react";

export default function JobsPage() {
  const { data: session } = useSession();
  if (session) {
    console.log(session.user.name);
  }
  return (
    <main className="flex flex-col items-center gap-8 justify-center">
      {session?.user.role === "EMPLOYER" ? (
        <button>Adicionar Vaga</button>
      ) : null}
      <JobList />
    </main>
  );
}
