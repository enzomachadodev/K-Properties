import { dateValidator } from "@/utils/dateValidator";
import { timeValidator } from "@/utils/timeValidator";
import { z } from "zod";

export const scheduleSchema = z.object({
  id: z.string().uuid(),
  date: z.string().refine(dateValidator, "invalid format"),
  hour: z.string().refine(timeValidator, "invalid format"),
  propertyId: z.string().uuid(),
  userId: z.string().uuid(),
});

export const scheduleCreateSchema = scheduleSchema.omit({
  id: true,
});
