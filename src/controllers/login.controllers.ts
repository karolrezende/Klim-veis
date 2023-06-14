import { Request, Response } from "express";
import { userLoginService } from "../services/login/loginUsers.services";
import { TloginSchemaRequest } from "../interfaces/login.interfaces";
export const userLoginController = async (req:Request, res:Response):Promise<Response>=>{
    const userRequest: TloginSchemaRequest = req.body
    const token: string = await userLoginService(userRequest)
    return res.status(201).json(token)
}