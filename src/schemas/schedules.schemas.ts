import { z } from "zod";

export const schedulesSchema = z.object({
    id: z.number(),
    date: z.date(),
    hour: z.string(), 
    realEstateId: z.number(),
    userId: z.number()
})

export const schedulesSchemaRequest = schedulesSchema.omit({id: true, userId: true})