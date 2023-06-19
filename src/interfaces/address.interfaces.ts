import { z } from "zod";
import {  addressSchema } from "../schemas/address.schemas";

export type Taddress = z.infer<typeof addressSchema>