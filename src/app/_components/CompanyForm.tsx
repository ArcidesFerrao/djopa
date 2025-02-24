import React from "react";
import { companySchema } from "../../schemas/companySchema";

export default function CompanyForm() {
  const [lastResult, action] = useActionState(addJob, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: companySchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <form
      //   id={form.id}
      //   onSubmit={form.onSubmit}
      action={action}
      className="job-form p-4 flex flex-col gap-y-4 w-4/6 "
    >
      <div>
        <label htmlFor="companyName">Nome:</label>
        <input type="text" name="companyName" />
      </div>

      <div>
        <label htmlFor="companyAddress">Localizacao</label>
        <input type="text" name="companyAddress" />
      </div>

      <div>
        <label htmlFor="companyDesc">Descricao</label>
        <input type="text" name="companyDesc" />
      </div>
      <div>
        <label htmlFor="companyUrl">Website</label>
        <input type="url" name="companyUrl" />
      </div>

      <input type="submit" name="submit" id="submit" className="p-2 my-4" />
    </form>
  );
}
