import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";

const ensureIsAdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	if (req.user.isAdm) {
		return next();
	}

	throw new AppError("unathorized!", 401);
};

export default ensureIsAdminMiddleware;
