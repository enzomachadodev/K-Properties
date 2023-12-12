import { AppError } from "@/errors/AppError";
import { IScheduleCreate } from "@/interfaces/schedules.interfaces";
import {
  propertyRepository,
  scheduleRepository,
  userRepository,
} from "@/repositories";

const create = async (payload: IScheduleCreate): Promise<string> => {
  const { date, hour, propertyId, userId } = payload;

  const [hours, minutes] = hour.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes;

  if (totalMinutes < 8 * 60 || totalMinutes > 18 * 60) {
    throw new AppError("Time should be between 8:00 and 18:00", 400);
  }

  const foundProperty = await propertyRepository.findOneBy({ id: propertyId });
  if (!foundProperty) throw new AppError("invalid property id", 404);

  const foundUser = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: ["schedules"],
  });
  if (!foundUser) throw new AppError("invalid property id", 404);

  foundUser.schedules.forEach((item) => {
    if (item.date == date && item.hour == hour)
      throw new AppError("time unavailable to the user", 409);
  });

  const foundSchedule = await scheduleRepository.findOne({
    where: {
      date,
      hour,
      property: {
        id: propertyId,
      },
    },
  });
  if (foundSchedule) throw new AppError("unavailable time for scheduling", 409);
  const newSchedule = scheduleRepository.create({
    ...payload,
    property: foundProperty,
    user: foundUser,
  });

  await scheduleRepository.save(newSchedule);
  return "Schedule created successfully";
};

const readByPropertyId = async (propertyId: string) => {
  const propertySchedules = await propertyRepository.findOne({
    where: { id: propertyId },
    relations: {
      schedules: {
        user: true,
      },
    },
  });
  if (!propertySchedules) throw new AppError("invalid property id", 404);

  return propertySchedules;
};

export default { create, readByPropertyId };
