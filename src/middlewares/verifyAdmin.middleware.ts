import { AppError } from "@/errors/AppError";
import { Request, Response, NextFunction } from "express";

const verifyAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!res.locals.user.isAdm) throw new AppError("unauthorized", 403);
  return next();
};

export default verifyAdminMiddleware;
