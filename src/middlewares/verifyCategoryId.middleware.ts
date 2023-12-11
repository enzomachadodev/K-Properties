import { AppError } from "@/errors/AppError";
import { categoryRepository } from "@/repositories";
import { Request, Response, NextFunction } from "express";

const verifyCategoryIdMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const foundCategory = await categoryRepository.findOneBy({
    id: req.params.id,
  });
  if (!foundCategory) throw new AppError("Category not exists", 404);
  return next();
};

export default verifyCategoryIdMiddleware;
