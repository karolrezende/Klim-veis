import { Router } from "express";
import { userDeleteController, userGetController, userPatchController, userPostController } from "../controllers/users.controllers";
import { ensureSchemaRequest } from "../middlewares/ensureSchemaRequest.middleware";
import { userSchemaRequest, userSchemaRequestPatch } from "../schemas/user.schemas";
import { userLoginController } from "../controllers/login.controllers";
import { loginSchemaRequest } from "../schemas/login.schemas";
import { ensureEmailDoesntExists } from "../middlewares/ensureEmailDoesntExists.middleware";
import { ensureToken } from "../middlewares/ensureToken.middleware";
import { ensureOwner } from "../middlewares/ensureOwner.middlewares";
import { ensureIdExists } from "../middlewares/ensureIdExists.middlewares";
import { ensureBodyExists } from "../middlewares/ensureBodyExists.middlewares";
import { ensureIsAdm } from "../middlewares/ensureIsAdm.middlewares";
import { categorieRequestSchema } from "../schemas/categories.schemas";
import { categoriesGetController, categoriesPostController } from "../controllers/categories.controllers";
import { realEstateSchemaRequest } from "../schemas/realEstate.schemas";
import { getRealEstateByCategoryController, getRealEstateController, postRealEstateController } from "../controllers/realEstate.controllers";
import { getRealEstateService } from "../services/realEstate/getRealEstate.services";

export const userRoute: Router = Router()
export const loginRoute: Router = Router()
export const categoriesRoute: Router = Router()
export const schedulesRoute: Router = Router()
export const realEstateRoute: Router = Router()

loginRoute.post('', ensureSchemaRequest(loginSchemaRequest), userLoginController)

userRoute.post('', ensureSchemaRequest(userSchemaRequest), ensureEmailDoesntExists, userPostController)
userRoute.get('', ensureToken,userGetController)
userRoute.patch('/:id', ensureToken, ensureSchemaRequest(userSchemaRequestPatch), ensureIdExists, ensureBodyExists,ensureEmailDoesntExists, ensureOwner, userPatchController)
userRoute.delete('/:id', ensureToken, ensureIsAdm, ensureIdExists, userDeleteController)


categoriesRoute.post('', ensureToken, ensureIsAdm, ensureSchemaRequest(categorieRequestSchema), categoriesPostController)
categoriesRoute.get('', categoriesGetController)
categoriesRoute.get('/:id/realEstate', getRealEstateByCategoryController)

realEstateRoute.post('', ensureToken, ensureIsAdm, ensureSchemaRequest(realEstateSchemaRequest), postRealEstateController)
realEstateRoute.get('', getRealEstateController)

schedulesRoute.post('', )
