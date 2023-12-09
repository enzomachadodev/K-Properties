import { propertyService } from "@/services";
import { Request, Response } from "express";

const create = async (req: Request, res: Response) => {
  const newProperty = await propertyService.create(req.body);
  return res.status(201).json(newProperty);
};

const read = async (req: Request, res: Response) => {
  const properties = await propertyService.read();
  return res.status(200).json(properties);
};

const readByCategoryId = async (req: Request, res: Response) => {
  const properties = await propertyService.readByCategoryId(req.params.id);
  return res.status(200).json(properties);
};

export default { create, read, readByCategoryId };
