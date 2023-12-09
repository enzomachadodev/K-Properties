import { NextFunction, Request, Response } from "express";
import { JsonWebTokenError } from "jsonwebtoken";
import { AppError } from "@/errors/AppError";

const handleError = async (
  error: Error,
  req: Request,
  res: Response,
  next?: NextFunction,
) => {
  if (error instanceof AppError)
    return res.status(error.statusCode).json({ message: error.message });

  if (error instanceof JsonWebTokenError)
    return res.status(401).json({ message: error.message });

  return res.status(500).json({
    message: "Internal server error!",
  });
};

export default handleError;
