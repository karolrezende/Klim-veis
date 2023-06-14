import { Request, Response } from "express";
import { TuserRequest, TuserRequestPatch, TuserResponse } from "../interfaces/users.interfaces";
import { userPostService } from "../services/users/postUsers.services";
import { getUserService } from "../services/users/getUsers.services";
import { userPatchService } from "../services/users/patchUser.services";

export const userPostController = async (req: Request, res: Response): Promise<Response> => {
    
    const userPostRequest: TuserRequest = req.body
    const createdPostUser: TuserResponse = await userPostService(userPostRequest)
9
    return res.status(201).json(createdPostUser)
}

export const userGetController = async (req: Request, res: Response): Promise<Response> => {
    const users: TuserResponse[] = await getUserService()
    return res.status(200).json(users)
}

export const userPatchController = async (req:Request, res:Response): Promise<Response> => {
    const userId: number = Number(req.params.id)
    const isAdm: string = res.locals.isAdm
    const owner: string = res.locals.email
    const user: TuserRequestPatch = req.body
    const userPatch: TuserResponse = await userPatchService(userId,user, isAdm, owner)

    return res.status(200).json(userPatch)
}