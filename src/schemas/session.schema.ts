import { z } from "zod";

const sessionCreateSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export { sessionCreateSchema };
