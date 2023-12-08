import { z } from "zod";

const userSchema = z.object({
	id: z.string(),
	name: z.string(),
	email: z.string().email(),
	isAdm: z.boolean(),
	isActive: z.boolean(),
	createdAt: z.date(),
	updatedAt: z.date(),
});

const loadUsersSchema = z.array(userSchema);

const userCreateSchema = z.object({
	email: z.string().email(),
	name: z.string(),
	password: z.string(),
	isAdm: z.boolean(),
});

const userUpdateSchema = z.object({
	email: z.string().email().optional(),
	name: z.string().optional(),
	password: z.string().optional(),
});

export { userSchema, userCreateSchema, loadUsersSchema, userUpdateSchema };

