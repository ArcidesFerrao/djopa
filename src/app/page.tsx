import type { Metadata } from "next";

import Subtitle from "@/components/Subtitle";
import Header from "@/components/Header";
import JobList from "@/components/JobList";
export const metadata: Metadata = {
  title: "Djopa",
  description: "Conectando talentos às oportunidades",
};
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center ">
        <Subtitle />
        <JobList />
      </main>
    </>
  );
}
