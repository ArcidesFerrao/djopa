"use client";

import React, { useActionState, useEffect, useState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import addJob from "../emprego/_actions/addJob";
import { jobPostSchema } from "@/schemas/jobSchema";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export type Company = {
  id: number;
  name: string;
  description: string;
  address: string;
  website: string;
};

export default function VagaForm() {
  const router = useRouter();
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

    // console.log(selectedCompany);
  };

  const { data: session } = useSession();

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

    if (lastResult?.status === "success") {
      toast.success("Vaga criada com sucesso!");
      console.log("success");
      setTimeout(() => {
        router.push("/emprego");
      }, 1000);
    } else if (lastResult?.status === "error") {
      toast.error("Erro ao criar a vaga. Tente novamente");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCompany, session, lastResult]);

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
            <label
              key={company.id}
              htmlFor={`company-${company.id}`}
              className="radio"
            >
              <input
                id={`company-${company.id}`}
                className="hidden"
                type="radio"
                name="companyId"
                value={company.id}
                onChange={handleCompanyChange}
              />
              <span className="radio-option py-1 px-2">{company.name}</span>
            </label>
          ))}
        </div>
      </div>
      {fields.companyId.errors && (
        <p className="errorText">{fields.companyId.errors}</p>
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
      {fields.description.errors && (
        <p className="errorText">{fields.description.errors}</p>
      )}
      <div>
        <label htmlFor="competencies">Skills</label>
        <input type="text" name="competencies" />
      </div>
      {fields.competencies.errors && (
        <p className="errorText">{fields.competencies.errors}</p>
      )}
      <div>
        <label htmlFor="location">Location</label>
        <input type="text" name="location" />
      </div>
      {fields.location.errors && (
        <p className="errorText">{fields.location.errors}</p>
      )}
      <div>
        <label htmlFor="contract">Type of Contract</label>
        <input type="text" name="contract" />
      </div>
      {fields.contract.errors && (
        <p className="errorText">{fields.contract.errors}</p>
      )}

      <div>
        <label htmlFor="salary">Salary</label>
        {/* <CurrencyInput
          id="salary-input"
          name="salary"
          suffix="MZN"
          decimalSeparator=","
          groupSeparator="."
        /> */}
        <input type="number" name="salary" />
      </div>
      {fields.salary.errors && (
        <p className="errorText">{fields.salary.errors}</p>
      )}
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
