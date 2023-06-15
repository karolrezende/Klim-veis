import { NextFunction, Request, Response } from "express";
import { usersRepository } from "../data-source";
import { Users } from "../entities/users.entity";
import { AppError } from "../error";

export const ensureIdExists = async (req:Request, res:Response, next: NextFunction) => {
    const id: number = Number(req.params.id)
    
    const user: Users | null = await usersRepository.findOneBy({
        id: id
    })

    if(!user){
        throw new AppError("User not found", 404)
    }
    res.locals.userExists = id
    next()
}