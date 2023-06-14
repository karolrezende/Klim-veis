import { NextFunction, Request, Response } from "express";
import { usersRepository } from "../data-source";
import { Users } from "../entities/users.entity";
import { AppError } from "../error";

export const ensureOwner = async (req:Request, res:Response, next: NextFunction) => {
    const id: number = Number(req.params.id)
    
    const isAdm = res.locals.isAdm
    
    const oldUser: Users | null = await usersRepository.findOneBy({
        id: id
    })

    if(isAdm === 'false' || id !== oldUser?.id){
        throw new AppError("insufficient permission", 403)
    }

    next()
}