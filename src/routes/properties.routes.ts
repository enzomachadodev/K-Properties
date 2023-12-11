import { Router } from "express";
import { propertyController } from "@/controllers";
import {
  verifyAddressMiddleware,
  verifyAdminMiddleware,
  verifyAuthMiddleware,
} from "@/middlewares";

const propertyRoutes = Router();

propertyRoutes.post(
  "",
  verifyAuthMiddleware,
  verifyAdminMiddleware,
  verifyAddressMiddleware,
  propertyController.create,
);
propertyRoutes.get("", propertyController.read);

export default propertyRoutes;
