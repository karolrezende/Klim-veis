import { Request, Response } from "express";
import { categoriesPostService } from "../services/categories/postCategories.services";
import { TcategoriesRequestSchema } from "../interfaces/categories.interfaces";
import { Categories } from "../entities/categories.entity";
import { getCategorieService } from "../services/categories/getCategories.services";

export const categoriesPostController = async (req: Request, res:Response): Promise<Response>=>{

    const postBody: TcategoriesRequestSchema = req.body
    const createdCategorie = await categoriesPostService(postBody)

    return res.status(201).json(createdCategorie)
}

export const categoriesGetController = async (req:Request, res: Response): Promise<Response> => {
    const categories: Categories[] = await getCategorieService()
    return res.status(200).json(categories)
 }