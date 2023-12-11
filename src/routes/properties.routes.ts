import { Router } from "express";
import { propertyController } from "@/controllers";
import {
  verifyAddressMiddleware,
  verifyAdminMiddleware,
  verifyAuthMiddleware,
  verifyBodyMiddleware,
} from "@/middlewares";
import { propertyCreateSchema } from "@/schemas/property.schema";

const propertyRoutes = Router();

propertyRoutes.post(
  "",
  verifyAuthMiddleware,
  verifyAdminMiddleware,
  verifyBodyMiddleware(propertyCreateSchema),
  verifyAddressMiddleware,
  propertyController.create,
);
propertyRoutes.get("", propertyController.read);

export default propertyRoutes;
