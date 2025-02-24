"use client";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import React, { useActionState } from "react";
import { z } from "zod";
import addJob from "../_actions/addJob";
// import CurrencyInput from "react-currency-input-field";

const jobPostSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(100, "Title cannot exceed 100 characters"),
  description: z.string().min(10, "Description mst be at lt 10 characters"),
  location: z.string().min(2, "Location is required"),
  salary: z.string().optional(),
  company: z
    .string()
    .min(2, "Company name must be at least 2 characters long")
    .max(100, "Company name cannot exceed 100 characters"),
  jobUrl: z.string().url("Invalid URL format").optional(),
});

export default function VagaForm() {
  const [lastResult, action] = useActionState(addJob, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: jobPostSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  //   const [amount, setAmount] = useState("0.00");

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      className="job-form p-4 flex flex-col gap-y-4 w-4/6 "
    >
      <div>
        <label htmlFor="company">Company</label>
        <input type="text" name="company" />
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
        <input type="url" name="jobUrl" />
      </div>
      {fields.jobUrl.errors && (
        <p className="errorText">{fields.jobUrl.errors}</p>
      )}
      <input type="submit" name="submit" id="submit" className="p-2 my-4" />
    </form>
  );
}
