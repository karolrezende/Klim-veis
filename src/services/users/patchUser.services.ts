import { usersRepository } from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../error";
import { TuserResponse } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/user.schemas";

export const userPatchService = async(id: number, userBody: any, isAdm: string, owner: string): Promise<TuserResponse> => {

    const oldUser: Users | null = await usersRepository.findOneBy({
        id: id
    })
    
    if(!oldUser){
        throw new AppError("User not found", 404)
    }
    if(isAdm === 'false' || owner !== oldUser.email){
        throw new AppError("insufficient permission", 403)
    }

    const newUser = usersRepository.create({
        ...oldUser,
        ...userBody
    })

    await usersRepository.save(newUser)
    const zoddedUser = userSchemaResponse.parse(newUser)
    return zoddedUser
}