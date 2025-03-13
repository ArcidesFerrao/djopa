"use client";

import JobList from "@/components/JobList";
import db from "@/db/db";

export default function JobsPage() {
  const jobsData = db.jobPost.findMany({
    select: {
      title: true,
      company: true,
      salary: true,
      location: true,
      type: true,
      expiresAt: true,
    },
  });
  return (
    <main className="flex flex-col items-center gap-8 justify-center">
      <JobList />
    </main>
  );
}
