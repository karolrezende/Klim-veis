import { SchedulesRepository } from "../../data-source";
import { AppError } from "../../error";
import { TschedulesSchemasRequest } from "../../interfaces/schedules.interfaces";

export const postSchedulesServices = async (reqBody: TschedulesSchemasRequest) => {
    const findedDate = await SchedulesRepository.findBy({
        date: reqBody.date,
        hour: reqBody.hour
    })

    if(findedDate){
        throw new AppError("Time not avaliable", 409)
    }
}