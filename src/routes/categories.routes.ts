import { categoryController } from "@/controllers";
import { verifyCategoryNameMiddleware } from "@/middlewares";
import { Router } from "express";

const categoryRoutes = Router();

categoryRoutes.post(
  "",
  verifyCategoryNameMiddleware,
  categoryController.create,
);
categoryRoutes.get("", categoryController.read);

export default categoryRoutes;
