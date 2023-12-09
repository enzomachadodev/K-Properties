import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "@/errors/AppError";

const verifyAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authorization = req.headers.authorization;

  if (!authorization) throw new AppError("Missing bearer token", 401);

  const token = authorization.split(" ")[1];

  verify(token, String(process.env.SECRET_KEY), (err, decoded: any) => {
    if (err) throw new AppError(err.message, 401);

    res.locals.user = {
      id: decoded.sub,
      isAdm: decoded.isAdm,
      email: decoded.email,
    };

    return next();
  });
};

export default verifyAuthMiddleware;
