import { z } from "zod";
import { schedulesSchema, schedulesSchemaRequest } from "../schemas/schedules.schemas";

export type TschedulesSchemas = z.infer<typeof schedulesSchema>
export type TschedulesSchemasRequest = z.infer<typeof schedulesSchemaRequest>