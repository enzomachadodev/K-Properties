import AppDataSource from "../../data-source";
import Schedules from "../../entities/schedules.entity";
import { IScheduleRequest } from "../../interfaces/schedules.interfaces";

const createSchedulesService = async (data: IScheduleRequest, userId: string) => {
	const schedulesRepository = AppDataSource.getRepository(Schedules);

	const newSchedule = await schedulesRepository.save({
		...data,
		userId: userId,
	});

	console.log(newSchedule);

	return newSchedule;
};

export default createSchedulesService;
