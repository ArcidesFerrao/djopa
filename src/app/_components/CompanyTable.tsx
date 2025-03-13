"use client";
// import db from "@/db/db";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export type Company = {
  id: number;
  name: string;
  description: string;
  website: string;
  address: string;
  userId: string;
  jobCount: number;
};

export default function EmployerTable() {
  const { data: session } = useSession();
  const [companies, setCompanies] = useState<Company[]>([]);
  const user = session?.user.id;

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const res = await fetch(
          session ? `/api/companies?userId=${user}` : `/api/companies`
        );
        if (!res.ok) throw new Error("Error fetching companies");
        const companyData = await res.json();
        setCompanies(companyData);
      } catch (error) {
        console.error("Error fetching companies list:", error);
      }
    };

    getCompanies();
  }, [user, session]);
  if (!user) return <p>Login to your account</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Website</th>
          <th>Jobs</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company) => (
          <tr key={company.id}>
            <td>{company.name}</td>
            <td>{company.website}</td>
            <td>{company.jobCount}</td>
          </tr>
        ))}
        <tr>
          <td>Devhub</td>
          <td>devhub.com</td>
          <td>12</td>
        </tr>
      </tbody>
    </table>
  );
}
