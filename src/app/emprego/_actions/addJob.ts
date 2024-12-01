'use server'

import db from "@/db/db";
import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation";
import { z } from "zod";

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

export default async function addJob(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {schema: jobPostSchema,});

  if (submission.status !== "success") {
    return submission.reply();
  }

  await db.jobPost.create({
    data: {
        title: submission.value.title,
        description: submission.value.description,
        location: submission.value.location,
        salary: submission.value?.salary,
    }
  })

  redirect("/emprego")
}
