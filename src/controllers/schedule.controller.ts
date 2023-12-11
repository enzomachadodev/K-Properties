import { scheduleService } from "@/services";
import { Request, Response } from "express";
const create = async (req: Request, res: Response) => {
  await scheduleService.create(req.body);
  return res.status(201).json({ message: "successfully scheduled time" });
};

const readByPropertyId = async (req: Request, res: Response) => {
  const schedules = await scheduleService.readByPropertyId(req.params.id);
  return res.status(200).json(schedules);
};

export default { create, readByPropertyId };
