import { categoryController } from "@/controllers";
import {
  verifyAuthMiddleware,
  verifyCategoryNameMiddleware,
} from "@/middlewares";
import { Router } from "express";

const categoryRoutes = Router();

categoryRoutes.post(
  "",
  verifyAuthMiddleware,
  verifyCategoryNameMiddleware,
  categoryController.create,
);
categoryRoutes.get("", categoryController.read);

export default categoryRoutes;
