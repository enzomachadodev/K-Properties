import { z } from "zod";

const addressCreateSchema = z.object({
	district: z.string(),
	zipCode: z.string().max(8),
	number: z.string().optional(),
	city: z.string(),
	state: z.string().max(2),
});

export { addressCreateSchema };

