import { z } from "zod";

export const companySchema = z.object({
    userId: z.string(),
    companyName: z
      .string()
      .min(3, "Title must be at least 3 characters long")
      .max(100, "Title cannot exceed 100 characters"),
    companyDesc: z.string().min(10, "Description must be at least 10 characters"),
    companyAddress: z.string().min(2, "Location is required"),
    companyUrl: z.string().url("Invalid URL format"),
});