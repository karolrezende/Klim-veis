import { Request, Response } from "express";
import { postRealEstateService } from "../services/realEstate/postRealEstate.services";
import { TrealEstateSchema, TrealEstateSchemaRequest } from "../interfaces/realEstate.interfaces";
import { getRealEstateByCategoryService } from "../services/realEstate/getRealEstateByCategory.services";

export const postRealEstateController = async (req: Request, res: Response): Promise<Response> =>{
    const reqBody: TrealEstateSchemaRequest = req.body
    const newRealEstate: TrealEstateSchema= await postRealEstateService(reqBody)
    return res.status(201).json(newRealEstate)
}

export const getRealEstateByCategoryController = async (req: Request, res: Response): Promise<Response> =>{
    const id: number = Number(req.params.id)
    const gettedRealEstate: TrealEstateSchema[] = await getRealEstateByCategoryService(id)

    return res.status(200).json(gettedRealEstate)
}