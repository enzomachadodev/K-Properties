import { Router } from "express";
import {
	createPropertiesController,
	listPropertiesController,
} from "../controllers/properties.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";

const propertyRoutes = Router();

propertyRoutes.post("", ensureAuthMiddleware, ensureIsAdminMiddleware, createPropertiesController);
propertyRoutes.get("", ensureAuthMiddleware, listPropertiesController);

export default propertyRoutes;
