import { AppError } from "@/errors/AppError";
import { categoryRepository } from "@/repositories";
import { Request, Response, NextFunction } from "express";

const verifyCategoryNameMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const foundCategory = await categoryRepository.findOneBy({
    name: req.body.name,
  });
  if (foundCategory) throw new AppError("Category already exists", 409);
  return next();
};

export default verifyCategoryNameMiddleware;
