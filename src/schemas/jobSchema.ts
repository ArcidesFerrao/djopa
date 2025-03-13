import { z } from "zod";

export const jobPostSchema = z.object({
  companyId: z.string(),
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(100, "Title cannot exceed 100 characters"),
  description: z.string().min(10, "Description mst be at lt 10 characters"),
  competencies: z.string().min(5, "Competencies must be at least 10 characters"),
  contract: z.string().min(2, "Type is required"),
  location: z.string().min(2, "Location is required"),
  salary: z.string().optional(),
      jobUrl: z.string().url("Invalid URL format").optional(),
});
