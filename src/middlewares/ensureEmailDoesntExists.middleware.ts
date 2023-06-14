import { NextFunction, Request, Response } from "express";
import { Users } from "../entities/users.entity";
import { usersRepository } from "../data-source";
import { AppError } from "../error";

export const ensureEmailDoesntExists = async (req:Request, res:Response, next: NextFunction) => {
    const emailReq = req.body.email

    const userMail: Users | null = await usersRepository.findOneBy({
        email: emailReq
    })

    console.log(req.body.email, emailReq, userMail)

    if(userMail){
        throw new AppError("Email already exists", 401)
    }

    next()
}