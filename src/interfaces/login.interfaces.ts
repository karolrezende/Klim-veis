import { z } from "zod";
import { loginSchemaRequest } from "../schemas/login.schemas";

export type TloginSchemaRequest = z.infer<typeof loginSchemaRequest>