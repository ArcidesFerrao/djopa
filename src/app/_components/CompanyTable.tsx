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
};

export default function EmployerTable() {
  const { data: session } = useSession();
  const [companies, setCompanies] = useState<Company[]>([]);
  const user = session?.user.id;

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const res = await fetch("/api/companies");
        if (!res.ok) throw new Error("Error fetching categories");
        const companyData = await res.json();
        setCompanies(companyData);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    getCompanies();
  }, []);
  if (!user) return <p>Login to your account</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company) => (
          <tr key={company.id}>
            <td>{company.name}</td>
            <td>{company.website}</td>
          </tr>
        ))}
        <tr>
          <td>Devhub</td>
          <td>devhub.com</td>
        </tr>
      </tbody>
    </table>
  );
}
