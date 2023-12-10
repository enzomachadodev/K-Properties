import { AppError } from "@/errors/AppError";
import { Request, Response, NextFunction } from "express";

const verifyOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.params.id !== res.locals.user.id) {
    if (!res.locals.user.isAdm) throw new AppError("unauthorized", 401);
  }
  return next();
};

export default verifyOwnerMiddleware;
