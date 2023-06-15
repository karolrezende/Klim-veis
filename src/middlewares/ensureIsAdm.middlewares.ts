import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

export const ensureIsAdm = async (req:Request, res:Response, next: NextFunction) => {
    const isAdm = res.locals.isAdmin

    if(!isAdm){
        throw new AppError("insufficient permission", 403)
    }

    next()
}