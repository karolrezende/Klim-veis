import { hash } from "bcryptjs"
import { usersRepository } from "../../data-source"
import { TuserRequest, TuserResponse } from "../../interfaces/users.interfaces"
import { userSchemaResponse } from "../../schemas/user.schemas"

export const userPostService = async (userPostRequest: TuserRequest): Promise<TuserResponse> => {
    
    userPostRequest.password = await hash(userPostRequest.password, 10)
    const createdUser = usersRepository.create(userPostRequest)
    await usersRepository.save(createdUser)

    const zoddedPost: TuserResponse = userSchemaResponse.parse(createdUser)
    return zoddedPost
}