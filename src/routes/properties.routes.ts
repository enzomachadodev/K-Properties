import { Router } from "express";
import {
	createPropertiesController,
	listPropertiesController,
} from "../controllers/properties.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import { propertyRequestSerializer } from "../serializers/properties.serializers";

const propertyRoutes = Router();

propertyRoutes.post(
	"",
	ensureAuthMiddleware,
	ensureIsAdminMiddleware,
	ensureDataIsValidMiddleware(propertyRequestSerializer),
	createPropertiesController
);
propertyRoutes.get("", ensureAuthMiddleware, listPropertiesController);

export default propertyRoutes;
