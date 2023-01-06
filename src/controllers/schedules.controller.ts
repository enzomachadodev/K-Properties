import { Request, Response } from "express";
import createSchedulesService from "../services/schedules/createSchedules.service";
import listSchedulesByPropertyService from "../services/schedules/listSchedulesByProperties.service";
export const createSchedulesController = async (req: Request, res: Response) => {
	const newSchedule = await createSchedulesService(req.body, req.user.id);
	return res.status(200).json(newSchedule);
};

export const listSchedulesByPropertyController = async (req: Request, res: Response) => {
	const schedules = await listSchedulesByPropertyService(req.params.id);
	return res.status(200).json(schedules);
};
