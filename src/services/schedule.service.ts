import { IScheduleCreate } from "@/interfaces/schedules.interfaces";
import { scheduleRepository } from "@/repositories";

const create = async (data: IScheduleCreate) => {
  const newSchedule = scheduleRepository.create(data);
  await scheduleRepository.save(newSchedule);
  return newSchedule;
};

const readByPropertyId = async (propertyId: string) => {
  const propertySchedules = scheduleRepository.findBy({
    property: { id: propertyId },
  });
  return propertySchedules;
};

export default { create, readByPropertyId };
