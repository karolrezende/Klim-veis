import { z } from "zod";

export const loginSchemaRequest = z.object({
    email: z.string().email(),
    password: z.string()
})