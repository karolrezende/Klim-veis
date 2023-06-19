import { z } from "zod";
import { addressSchema } from "./address.schemas";

export const realEstateSchema = z.object({
  id: z.number(),
  value: z.string(),
  size: z.number(),
  address: addressSchema,
  categoryId: z.number(),
  sold: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish(),
});

export const realEstateSchemaRequest = realEstateSchema.omit({
  id: true,
  sold: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});
