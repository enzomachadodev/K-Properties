import { addressService, propertyService } from "@/services";
import { Request, Response } from "express";

const create = async (req: Request, res: Response) => {
  const newAdress = await addressService.create(req.body.address);
  const newProperty = await propertyService.create({
    ...req.body,
    address: newAdress,
  });
  return res.status(201).json(newProperty);
};

const read = async (req: Request, res: Response) => {
  const properties = await propertyService.read();
  return res.status(200).json(properties);
};

export default { create, read };
