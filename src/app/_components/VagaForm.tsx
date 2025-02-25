"use client";

import React, { useActionState, useEffect, useState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import addJob from "../emprego/_actions/addJob";
import { jobPostSchema } from "@/schemas/jobSchema";
import { useSession } from "next-auth/react";

export type Company = {
  id: number;
  name: string;
  description: string;
  address: string;
  website: string;
};

export default function VagaForm() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string>();
  const [website, setWebsite] = useState("");
  const [lastResult, action] = useActionState(addJob, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: jobPostSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const companyId = event.target.value;
    setSelectedCompany(companyId);

    console.log(selectedCompany);
  };

  const { data: session } = useSession();

  //   const [amount, setAmount] = useState("0.00");
  useEffect(() => {
    if (selectedCompany) {
      const findCompany = companies.find(
        (company) => company.id.toString() === selectedCompany
      );
      setWebsite(findCompany ? findCompany.website : "");
    }
    const getCompanies = async () => {
      const user = session?.user.id;
      try {
        const res = await fetch(
          session ? `/api/companies?userId=${user}` : `/api/companies`
        );
        if (!res.ok) throw new Error("Error fetching companies");
        const companyData = await res.json();
        setCompanies(companyData);
      } catch (error) {
        console.error("Error fetching companies: ", error);
      }
    };

    getCompanies();
  }, [selectedCompany, session]);

  if (!session?.user) return console.log(session?.user?.id);

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      className="job-form p-4 flex flex-col gap-y-4 w-4/6 "
    >
      <div>
        <label htmlFor="company">Company</label>
        <div className="radio-company flex gap-4">
          {companies.map((company) => (
            <label key={company.id} className="radio">
              <input
                className="sr-only"
                type="radio"
                name="company"
                value={company.id}
                onChange={handleCompanyChange}
              />
              <span className="radio-option py-1 px-2">{company.name}</span>
            </label>
          ))}
        </div>
      </div>
      {fields.company.errors && (
        <p className="errorText">{fields.company.errors}</p>
      )}
      <div>
        <label htmlFor="title">Job Title</label>
        <input type="text" name="title" />
      </div>
      {fields.title.errors && (
        <p className="errorText">{fields.title.errors}</p>
      )}
      <div>
        <label htmlFor="description">Job Description</label>
        <input type="text" name="description" />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input type="text" name="location" />
      </div>

      <div>
        <label htmlFor="contract">Type of Contract</label>
        <input type="text" name="contract" />
      </div>

      <div>
        <label htmlFor="salary">Salary</label>
        {/* <CurrencyInput
          id="salary-input"
          name="salary"
          suffix="MZN"
          decimalSeparator=","
          groupSeparator="."
        /> */}
        <input type="text" name="salary" />
      </div>
      <div>
        <label htmlFor="jobUrl">Link to the job</label>
        <input
          type="url"
          name="jobUrl"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      {fields.jobUrl.errors && (
        <p className="errorText">{fields.jobUrl.errors}</p>
      )}
      <input type="submit" name="submit" id="submit" className="p-2 my-4" />
    </form>
  );
}
