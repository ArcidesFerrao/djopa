"use client";

import React, { useActionState } from "react";
import { companySchema } from "../../schemas/companySchema";
import addCompany from "../actions/addCompany";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useSession } from "next-auth/react";

export default function CompanyForm() {
  const [lastResult, action] = useActionState(addCompany, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: companySchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  const { data: session } = useSession();

  if (!session?.user) return console.log(session?.user?.id);

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      className="job-form p-4 flex flex-col gap-y-4 w-4/6 "
    >
      <div>
        {/* <label htmlFor="userId">Id:</label> */}
        <input
          type="hidden"
          name="userId"
          defaultValue={session.user ? session?.user?.id : ""}
        />
      </div>
      <div className="flex flex-col">
        {/* <label htmlFor="companyName">Nome:</label> */}
        <input
          className="w-full"
          type="text"
          name="companyName"
          placeholder="Nome da Empresa"
        />
        {fields.companyName.allErrors && <p>{fields.companyName.errors}</p>}
      </div>
      <div className="flex flex-col">
        {/* <label htmlFor="companyDesc">Descricao</label> */}
        <textarea
          className="w-full rounded-lg p-4 text-md"
          name="companyDesc"
          placeholder="Sobre a Empresa"
        />
        {fields.companyDesc.allErrors && <p>{fields.companyDesc.errors}</p>}
      </div>
      <div className="flex flex-col">
        {/* <label htmlFor="companyAddress">Localizacao</label> */}
        <input
          className="w-full"
          type="text"
          name="companyAddress"
          placeholder="Endereco"
        />
        {fields.companyAddress.allErrors && (
          <p>{fields.companyAddress.errors}</p>
        )}
      </div>
      <div className="flex flex-col">
        {/* <label htmlFor="companyUrl">Website</label> */}
        <input
          className="w-full"
          type="url"
          name="companyUrl"
          placeholder="Website"
        />
        {fields.companyUrl.allErrors && <p>{fields.companyUrl.errors}</p>}
      </div>
      <div className="flex flex-col">
        {/* <label htmlFor="companyUrl">Website</label> */}
        <input
          className="w-full"
          type="email"
          name="companyEmail"
          placeholder="Endereco Eectronico"
        />
        {fields.companyEmail.allErrors && <p>{fields.companyEmail.errors}</p>}
      </div>

      <input
        type="submit"
        name="submit"
        id="submit"
        className="p-4 my-4 font-semibold"
      />
    </form>
  );
}
