import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import jwt from "jsonwebtoken";

export const ensureToken = (req:Request, res:Response, next: NextFunction) => {
    let token: string | undefined = req.headers.authorization

    if(!token){
        throw new AppError("Missing token", 401)
    }
    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY!, (err: any, decoded: any)=>{
        if(err) throw new AppError(err.message)

        res.locals.isAdmin = decoded.isAdmin
        res.locals.email = decoded.sub

        next()
    })

}