import { categoriesRepository } from "../../data-source"
import { Categories } from "../../entities/categories.entity"
import { AppError } from "../../error"
import { TcategoriesRequestSchema, TcategoriesSchema } from "../../interfaces/categories.interfaces"
import { categorieSchema } from "../../schemas/categories.schemas"

export const categoriesPostService = async (categorie: TcategoriesRequestSchema) => {
    
    const categorieExist: Categories | null = await categoriesRepository.findOneBy({
        name: categorie.name
    })

    if(categorieExist){
        throw new AppError("This categorie already exists", 409)
    }

    const newCategorie: Categories = await categoriesRepository.create(categorie)
    await categoriesRepository.save(newCategorie)

    const zoddedCategorie: TcategoriesSchema = categorieSchema.parse(newCategorie)

    return zoddedCategorie
}