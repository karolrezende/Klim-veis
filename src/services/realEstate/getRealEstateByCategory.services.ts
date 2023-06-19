import { categoriesRepository } from "../../data-source";
import { AppError } from "../../error";
import { TrealEstateSchema } from "../../interfaces/realEstate.interfaces";

export const getRealEstateByCategoryService = async (id: number): Promise<any> =>{
    const listRealEstate = await categoriesRepository.find({
        where:{
            id: id
        },
        relations:{
            realEstate: true
        }
    }
    )
    if(!listRealEstate){
        throw new AppError("No items found", 404)
    }

    return listRealEstate
}