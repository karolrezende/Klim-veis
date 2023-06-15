import { Request, Response } from "express";
import { postRealEstateService } from "../services/realEstate/createRealEstate.services";

export const postRealEstateController = async (req: Request, res: Response): Promise<Response> =>{
    const reqBody = req.body
    const realEstateBody= await postRealEstateService()
    return res.status(201)
}