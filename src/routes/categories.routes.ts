import { categoryController } from "@/controllers";
import {
  verifyAdminMiddleware,
  verifyAuthMiddleware,
  verifyCategoryIdMiddleware,
  verifyCategoryNameMiddleware,
} from "@/middlewares";
import { Router } from "express";

const categoryRoutes = Router();

categoryRoutes.post(
  "",
  verifyAuthMiddleware,
  verifyAdminMiddleware,
  verifyCategoryNameMiddleware,
  categoryController.create,
);
categoryRoutes.get("", categoryController.read);
categoryRoutes.get(
  "/:id/properties",
  verifyCategoryIdMiddleware,
  categoryController.readPropertiesByCategoryId,
);

export default categoryRoutes;
