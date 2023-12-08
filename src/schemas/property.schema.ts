import { z } from "zod";

const propertyCreateSchema = z.object({
	value: z.number(),
	size: z.number(),
	address: z.object({
		id: z.string(),
		district: z.string(),
		zipCode: z.string().max(8),
		number: z.string().optional(),
		city: z.string(),
		state: z.string().max(2),
	}),
	categoryId: z.string(),
});

const propertyResponseSchema = z.object({
	value: z.number(),
	size: z.number(),
	address: z.object({
		id: z.string(),
		district: z.string(),
		zipCode: z.string().max(8),
		number: z.string().optional(),
		city: z.string(),
		state: z.string().max(2),
	}),
	categoryId: z.string(),
});

export { propertyCreateSchema, propertyResponseSchema };

