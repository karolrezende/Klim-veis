import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const ensureSchemaRequest =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const newSchema = schema.parse(req.body);
    next();
  };
