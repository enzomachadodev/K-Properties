import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../errors/AppError";

const ensureAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
	let token = req.headers.authorization;

	if (!token) {
		throw new AppError("Header authorization invalid!", 401);
	}

	token = token.split(" ")[1];

	verify(token, String(process.env.SECRET_KEY), (err, decoded: any) => {
		if (err) {
			throw new AppError(err.message, 401);
		}

		req.user = {
			id: decoded.sub,
			email: decoded.email,
			isAdm: decoded.isAdm,
		};

		return next();
	});
};

export default ensureAuthMiddleware;
