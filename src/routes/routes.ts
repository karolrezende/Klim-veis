import { Router } from "express";
import { userPostController } from "../controllers/users/users.controllers";
import { ensureSchemaRequest } from "../middlewares/ensureSchemaRequest.middleware";
import { userSchemaRequest } from "../schemas/user.schemas";

export const userRoute: Router = Router()
export const loginRoute: Router = Router()
export const categoriesRoute: Router = Router()
export const schedulesRoute: Router = Router()
export const realEstateRoute: Router = Router()


userRoute.post('', ensureSchemaRequest(userSchemaRequest), userPostController)