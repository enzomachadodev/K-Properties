import { AppError } from "@/errors/AppError";
import { Request, Response, NextFunction } from "express";

const verifyUserIsActiveMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!res.locals.foundUser.isActive)
    throw new AppError("disabled account", 400);
  return next();
};

export default verifyUserIsActiveMiddleware;
