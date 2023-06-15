import { usersRepository } from "../../data-source" 

export const deleteUserService = async (id: number): Promise<void> => {
    await usersRepository.softDelete(id)
}