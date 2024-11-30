import SearchBar from "@/components/SearchBar";
import React from "react";
import Job from "./_components/Job";

export default function EmpregoPage() {
  return (
    <div className="flex flex-col py-4 gap-8 items-center justify-center">
      <SearchBar />

      <section className="jobs flex w-full items-center justify-center">
        <Job />
      </section>
    </div>
  );
}
