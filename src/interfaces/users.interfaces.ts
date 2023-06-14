import { z } from "zod";
import { userSchemaResponse, userSchema, userSchemaRequest, userSchemaRequestPatch } from "../schemas/user.schemas";

export type Tuser = z.infer<typeof userSchema>
export type TuserRequest = z.infer<typeof userSchemaRequest>
export type TuserResponse = z.infer<typeof userSchemaResponse>
export type TuserRequestPatch = z.infer<typeof userSchemaRequestPatch>