import { z } from "zod";

export const address = z.object({
    street: z.string(),
    zipCode: z.string(),
    number: z.string(),
    city: z.string(),
    state: z.string()
})