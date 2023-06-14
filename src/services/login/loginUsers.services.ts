import { compare } from "bcryptjs"
import { TloginSchemaRequest } from "../../interfaces/login.interfaces"
import { usersRepository } from "../../data-source"
import { AppError } from "../../error"
import { Users } from "../../entities/users.entity"
import jwt from "jsonwebtoken"
import "dotenv/config";

export const userLoginService =async (userLogin: TloginSchemaRequest)=>{

    const user: Users | null = await usersRepository.findOneBy({
        email: userLogin.email
    })

    if(!user){
        throw new AppError("Wrong mail/password", 400)
    }

    const userPassword = await compare(userLogin.password, user.password)

    if(!userPassword){
        throw new AppError("Wrong mail/password", 400)
    }
    
    const token = jwt.sign(
    {
        isAdmin: user.admin
    }, process.env.SECRET_KEY!,
    { 
        expiresIn: '1d',
        subject: String(user.email)
    })
    return token
}