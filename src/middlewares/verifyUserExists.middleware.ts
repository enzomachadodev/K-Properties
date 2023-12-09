import { AppError } from "@/errors/AppError";
import { userRepository } from "@/repositories";
import { Request, Response, NextFunction } from "express";

const verifyUserExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const foundUser = await userRepository.findOneBy({ id: req.params.id });
  if (!foundUser) throw new AppError("User not found", 404);
  res.locals.foundUser = foundUser;
  return next();
};

export default verifyUserExistsMiddleware;
