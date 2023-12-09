import { userService } from "@/services";
import { Request, Response } from "express";

const create = async (req: Request, res: Response) => {
  const newUser = await userService.create(req.body);
  return res.status(201).json(newUser);
};
const read = async (req: Request, res: Response) => {
  const users = await userService.read();
  return res.status(200).json(users);
};
const update = async (req: Request, res: Response) => {
  const updatedUser = await userService.update(req.body, req.params.id);
  return res.status(200).json(updatedUser);
};
const destroy = async (req: Request, res: Response) => {
  const deletedUser = await userService.destroy(req.params.id);
  return res.status(204).json(deletedUser);
};

export default { create, read, update, destroy };
