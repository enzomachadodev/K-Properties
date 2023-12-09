import { Router } from "express";
import { sessionController } from "@/controllers";
import { verifyBodyMiddleware } from "@/middlewares";
import { sessionCreateSchema } from "@/schemas/session.schema";

const sessionRoutes = Router();

sessionRoutes.post(
  "",
  verifyBodyMiddleware(sessionCreateSchema),
  sessionController.create,
);

export default sessionRoutes;
