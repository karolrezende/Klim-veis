import { Router } from "express";
import { userGetController, userPatchController, userPostController } from "../controllers/users.controllers";
import { ensureSchemaRequest } from "../middlewares/ensureSchemaRequest.middleware";
import { userSchemaRequest, userSchemaRequestPatch } from "../schemas/user.schemas";
import { userLoginController } from "../controllers/login.controllers";
import { loginSchemaRequest } from "../schemas/login.schemas";
import { ensureEmailDoesntExists } from "../middlewares/ensureEmailDoesntExists.middleware";
import { ensureToken } from "../middlewares/ensureToken.middleware";

export const userRoute: Router = Router()
export const loginRoute: Router = Router()
export const categoriesRoute: Router = Router()
export const schedulesRoute: Router = Router()
export const realEstateRoute: Router = Router()

loginRoute.post('', ensureSchemaRequest(loginSchemaRequest), userLoginController)
userRoute.post('', ensureSchemaRequest(userSchemaRequest), ensureEmailDoesntExists, userPostController)
userRoute.get('', ensureToken,userGetController)
userRoute.patch('/:id', ensureToken, ensureSchemaRequest(userSchemaRequestPatch), ensureEmailDoesntExists, userPatchController)