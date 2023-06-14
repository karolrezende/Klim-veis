import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

export const ensureBodyExists = async (req: Request, res: Response, next:NextFunction)  => {
    if (Object.keys(req.body).length === 0) {
        throw new AppError("Almost one object", 400)
    }
    next()
} 