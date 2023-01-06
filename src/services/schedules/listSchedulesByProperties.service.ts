import AppDataSource from "../../data-source";
import Schedules from "../../entities/schedules.entity";

const listSchedulesByPropertyService = async (propertyId: string) => {
	const schedulesRepository = AppDataSource.getRepository(Schedules);

	const propertySchedules = schedulesRepository.find();

	return propertySchedules;
};

export default listSchedulesByPropertyService;
