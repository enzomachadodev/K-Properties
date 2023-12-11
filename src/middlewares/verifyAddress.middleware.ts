import { AppError } from "@/errors/AppError";
import { addressRepository } from "@/repositories";
import { Request, Response, NextFunction } from "express";

const verifyAddressMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const foundAddress = await addressRepository.findOne({
    where: req.body.address,
  });
  if (foundAddress) throw new AppError("Address already exists", 409);
  return next();
};

export default verifyAddressMiddleware;
