import { z } from "zod";
import { UserSchemaResponse, userSchema, userSchemaRequest } from "../schemas/user.schemas";

export type Tuser = z.infer<typeof userSchema>
export type TuserRequest = z.infer<typeof userSchemaRequest>
export type TuserResponse = z.infer<typeof UserSchemaResponse>