import { Router } from "express";
import { userGetController, userPatchController, userPostController } from "../controllers/users.controllers";
import { ensureSchemaRequest } from "../middlewares/ensureSchemaRequest.middleware";
import { userSchemaRequest, userSchemaRequestPatch } from "../schemas/user.schemas";
import { userLoginController } from "../controllers/login.controllers";
import { loginSchemaRequest } from "../schemas/login.schemas";
import { ensureEmailDoesntExists } from "../middlewares/ensureEmailDoesntExists.middleware";
import { ensureToken } from "../middlewares/ensureToken.middleware";
import { ensureOwner } from "../middlewares/ensureOwner.middlewares";
import { ensureIdExists } from "../middlewares/ensureIdExists.middlewares";
import { ensureBodyExists } from "../middlewares/ensureBodyExists.middlewares";

export const userRoute: Router = Router()
export const loginRoute: Router = Router()
export const categoriesRoute: Router = Router()
export const schedulesRoute: Router = Router()
export const realEstateRoute: Router = Router()

loginRoute.post('', ensureSchemaRequest(loginSchemaRequest), userLoginController)

userRoute.post('', ensureSchemaRequest(userSchemaRequest), ensureEmailDoesntExists, userPostController)
userRoute.get('', ensureToken,userGetController)
userRoute.patch('/:id', ensureToken, ensureSchemaRequest(userSchemaRequestPatch), ensureIdExists, ensureBodyExists,ensureEmailDoesntExists, ensureOwner, userPatchController)