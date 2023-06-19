import { addressRepository, categoriesRepository, realEstateRepository } from "../../data-source";
import { AppError } from "../../error";
import { Taddress } from "../../interfaces/address.interfaces";
import { TcategoriesSchema } from "../../interfaces/categories.interfaces";
import { TrealEstateSchema, TrealEstateSchemaRequest } from "../../interfaces/realEstate.interfaces";
import { realEstateSchema } from "../../schemas/realEstate.schemas";

export const postRealEstateService = async (reqBody: TrealEstateSchemaRequest): Promise<any>=>{
    
    const address = reqBody.address

    const oldAdress: Taddress | null = await addressRepository.findOneBy(
        {
            zipCode: reqBody.address?.zipCode
        }
    )
    if(oldAdress){
        throw new AppError("This address is already in use", 409) 
    }

    const category: TcategoriesSchema | null = await categoriesRepository.findOneBy({
        id: reqBody.categoryId!
    })

    if(!category){
        throw new AppError("Category not found", 404)
    }
    const newAdress: Taddress = addressRepository.create(address)
    await addressRepository.save(newAdress)

    const realEstate = realEstateRepository.create({
        ...reqBody,
        adress: newAdress,
        categories: category
    })
    await realEstateRepository.save(realEstate)

    return realEstate
}