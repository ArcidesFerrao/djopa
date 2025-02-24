'use server'

import db from "@/db/db";
import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation";
import { z } from "zod";

const jobPostSchema = z.object({
    companyId: z.string(),
    company: z
    .string()
    .min(2, "Company name must be at least 2 characters long")
    .max(100, "Company name cannot exceed 100 characters"),
    title: z
      .string()
      .min(3, "Title must be at least 3 characters long")
      .max(100, "Title cannot exceed 100 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    competencies: z.string().min(10, "Competencies must be at least 10 characters"),
    type: z.string().min(2, "Type is required"),
    location: z.string().min(2, "Location is required"),
    salary: z.number().optional(),
    jobUrl: z.string().url("Invalid URL format").optional(),
    expiresAt: z.date(),
  });

export default async function addJob(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {schema: jobPostSchema,});

  if (submission.status !== "success") {
    return submission.reply();
  }

  await db.jobPost.create({
    data: {
        title: submission.value.title,
        description: submission.value.description,
        competencies: submission.value.competencies,
        type: submission.value.type,
        location: submission.value.location,
        salary: submission.value?.salary,
        expiresAt: submission.value.expiresAt,
        company: {
          connect: { id: submission.value.companyId }
        }
    }
  })

  redirect("/emprego")
}
