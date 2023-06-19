import { Request, Response } from "express";
import { postRealEstateService } from "../services/realEstate/postRealEstate.services";
import { TrealEstateSchema, TrealEstateSchemaRequest } from "../interfaces/realEstate.interfaces";

export const postRealEstateController = async (req: Request, res: Response): Promise<Response> =>{
    const reqBody: TrealEstateSchemaRequest = req.body
    const newRealEstate: TrealEstateSchema= await postRealEstateService(reqBody)
    return res.status(201).json(newRealEstate)
}