import { Request, Response } from "express";
import { postSchedulesServices } from "../services/schedules/postSchedules.services";
import { TschedulesSchemasRequest } from "../interfaces/schedules.interfaces";


export const postSchedulesControllers = async (req: Request, res: Response): Promise<Response> => {
    const reqBody: TschedulesSchemasRequest = req.body
    const postedSchedules = await postSchedulesServices(reqBody)
}