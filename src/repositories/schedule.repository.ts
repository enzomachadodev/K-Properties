import AppDataSource from "@/data-source";
import Schedules from "@/entities/schedules.entity";

export const scheduleRepository = AppDataSource.getRepository(Schedules);
