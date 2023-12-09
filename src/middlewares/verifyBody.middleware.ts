import { AppError } from "@/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const verifyBodyMiddleware =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      const validatedData = schema.parse(req.body);
      req.body = validatedData;
      return next();
    } catch (error: any) {
      throw new AppError(error.errors, 400);
    }
  };

export default verifyBodyMiddleware;
