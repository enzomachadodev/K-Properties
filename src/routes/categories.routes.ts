import { Router } from "express";
import {
	createCategoryController,
	listCategoriesController,
	listPropertyByCategoryController,
} from "../controllers/categories.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import { categoryRequestSerializer } from "../serializers/categories.serializers";

const categoryRoutes = Router();

categoryRoutes.post(
	"",
	ensureAuthMiddleware,
	ensureIsAdminMiddleware,
	ensureDataIsValidMiddleware(categoryRequestSerializer),
	createCategoryController
);
categoryRoutes.get("", listCategoriesController);
categoryRoutes.get("/:id/properties", listPropertyByCategoryController);

export default categoryRoutes;
