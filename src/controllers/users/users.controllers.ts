import { Request, Response } from "express";
import { TuserRequest, TuserResponse } from "../../interfaces/users.interfaces";
import { userPostService } from "../../services/users/users.services";

export const userPostController = async (req: Request, res: Response): Promise<Response> => {
    
    const userPostRequest: TuserRequest = req.body
    const createdPostUser: TuserResponse = await userPostService(userPostRequest)
9
    return res.status(201).json(createdPostUser)
}