import { scheduleController } from "@/controllers";
import { Router } from "express";

const scheduleRoutes = Router();

scheduleRoutes.post("", scheduleController.create);
scheduleRoutes.get("/property/:id", scheduleController.readByPropertyId);

export default scheduleRoutes;
