import { sessionService } from "@/services";
import { Request, Response } from "express";

const create = async (req: Request, res: Response) => {
  const token = await sessionService.create(req.body);
  return res.json({ token });
};

export default { create };
