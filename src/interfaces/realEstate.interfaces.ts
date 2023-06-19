import { z } from "zod";
import { realEstateSchema, realEstateSchemaRequest } from "../schemas/realEstate.schemas";

export type TrealEstateSchema = z.infer<typeof realEstateSchema>
export type TrealEstateSchemaRequest = z.infer<typeof realEstateSchemaRequest> 