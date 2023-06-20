import { realEstateRepository } from "../../data-source"
import { TrealEstateSchema } from "../../interfaces/realEstate.interfaces"

export const getRealEstateService = async () => {
    const getRealEstate = await realEstateRepository.find()

    return getRealEstate
}