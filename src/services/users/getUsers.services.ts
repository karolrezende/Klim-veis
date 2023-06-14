import { usersRepository } from "../../data-source";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../error";
import { TuserResponse } from "../../interfaces/users.interfaces";
import { userSchemaResponseArr } from "../../schemas/user.schemas";

export const getUserService = async (): Promise<Array<TuserResponse>> =>{
    const users: Users[] | undefined = await usersRepository.find()

    if(!users){
        throw new AppError("Users not found", 400)
    }

    const zoddedUsers = userSchemaResponseArr.parse(users)
    return zoddedUsers
}