import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { handleError } from "./error"
import { categoriesRoute, loginRoute, realEstateRoute, schedulesRoute, userRoute } from "./routes/routes"


const app = express()

app.use(express.json())

app.use('/users', userRoute)
app.use('/login', loginRoute)
app.use('/categories', categoriesRoute)
app.use('/realEstate', realEstateRoute)
app.use('/schedules', schedulesRoute)

app.use(handleError)
export default app