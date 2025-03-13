'use server'

import db from "@/db/db";
import { jobPostSchema } from "@/schemas/jobSchema";
import { SubmissionResult } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod"

export default async function addJob(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {schema: jobPostSchema,});
  const dateExpire = new Date("2025-03-25");
  if (submission.status !== "success") {
    return submission.reply();
  }
  try {
    await db.jobPost.create({
      data: {
          title: submission.value.title,
          description: submission.value.description,
          competencies: submission.value.competencies,
          type: submission.value.contract,
          location: submission.value.location,
          salary: Number(submission.value?.salary),
          
          expiresAt: dateExpire ,
          company: {
            connect: { id: submission.value.companyId }
          }
      }
  }
)

  return { status: "success" } satisfies SubmissionResult<string[]>

} catch (error) {
  console.error("Database error", error)
  return {
    status: "error",
    error: { general: ["failed to create jobpost"]},
  } satisfies SubmissionResult<string[]>
}
}
