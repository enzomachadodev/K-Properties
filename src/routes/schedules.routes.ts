import { scheduleController } from "@/controllers";
import {
  verifyAdminMiddleware,
  verifyAuthMiddleware,
  verifyBodyMiddleware,
} from "@/middlewares";
import { scheduleCreateSchema } from "@/schemas/schedules.schema";
import { Router } from "express";

const scheduleRoutes = Router();

scheduleRoutes.post(
  "",
  verifyAuthMiddleware,
  verifyBodyMiddleware(scheduleCreateSchema),
  scheduleController.create,
);
scheduleRoutes.get(
  "/properties/:id",
  verifyAuthMiddleware,
  verifyAdminMiddleware,
  scheduleController.readByPropertyId,
);

export default scheduleRoutes;
