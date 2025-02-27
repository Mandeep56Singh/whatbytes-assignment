import { z } from "zod";

export const resultSchema = z.object({
  rank: z.coerce.number().int().min(1, "Rank must be at least 1"),
  percentage: z.coerce
    .number()
    .min(0, "Percentage cannot be negative")
    .max(100, "Percentage cannot exceed 100"),
  score: z.coerce
    .number()
    .int()
    .min(0, "Score cannot be negative")
    .max(15, "Score cannot exceed 15"),
});
