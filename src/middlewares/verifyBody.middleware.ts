import { AppError } from "@/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

const verifyBodyMiddleware =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
    } catch (error) {
      if (error instanceof ZodError)
        return res.status(400).json({ message: error.flatten().fieldErrors });
    }
    const hasExtraFields = Object.keys(req.body).some(
      (field) => !schema.shape[field],
    );
    if (hasExtraFields)
      throw new AppError("unexpected fields in the request body", 401);

    return next();
  };

export default verifyBodyMiddleware;
