import { categoryService } from "@/services";
import { Request, Response } from "express";

const create = async (req: Request, res: Response) => {
  const newCategory = await categoryService.create(req.body);
  return res.status(201).json(newCategory);
};

const read = async (req: Request, res: Response) => {
  const categories = await categoryService.read();
  return res.status(200).json(categories);
};

const readPropertiesByCategoryId = async (req: Request, res: Response) => {
  const properties = await categoryService.readPropertiesByCategoryId(
    req.params.id,
  );
  return res.status(200).json(properties);
};

export default { create, read, readPropertiesByCategoryId };
