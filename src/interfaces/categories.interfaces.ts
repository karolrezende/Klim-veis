import { z } from "zod";
import { categorieRequestSchema, categorieSchema } from "../schemas/categories.schemas";

export type TcategoriesSchema = z.infer<typeof categorieSchema>
export type TcategoriesRequestSchema = z.infer<typeof categorieRequestSchema>