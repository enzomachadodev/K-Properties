import { AppError } from "@/errors/AppError";
import { userRepository } from "@/repositories";
import { NextFunction, Request, Response } from "express";

const verifyUserEmailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const foundUser = await userRepository.findOneBy({ email: req.body.email });
  if (foundUser) throw new AppError("E-mail is already in use", 409);
  return next();
};

export default verifyUserEmailMiddleware;
