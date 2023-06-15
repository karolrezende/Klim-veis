import { z } from "zod";

export const categorieSchema = z.object({
    id: z.number(),
    name: z.string()
})

export const categorieRequestSchema = categorieSchema.omit({id: true})