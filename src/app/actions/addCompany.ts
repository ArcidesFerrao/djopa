'use server'

import db from "@/db/db";
import { companySchema } from "@/schemas/companySchema";
import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation";


export default async function addCompany(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {schema: companySchema,});

  if (submission.status !== "success") {
    return submission.reply();
  }

  await db.company.create({
    data: {
        name: submission.value.companyName ,
        description: submission.value.companyDesc,
        address: submission.value.companyAddress,
        website: submission.value.companyUrl,
    }
  })

  redirect("/emprego")
}
