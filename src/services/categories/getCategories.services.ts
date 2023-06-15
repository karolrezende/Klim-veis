import { categoriesRepository } from "../../data-source"
import { Categories } from "../../entities/categories.entity"
import { AppError } from "../../error"

export const getCategorieService = async () => {
    const categories: Categories[] | null = await categoriesRepository.find()
    
    if(categories.length ===0){
        throw new AppError("No categories found", 404)
    }

    return categories
}