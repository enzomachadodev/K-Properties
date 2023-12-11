import { Router } from "express";
import { propertyController } from "@/controllers";
import { verifyAddressMiddleware } from "@/middlewares";

const propertyRoutes = Router();

propertyRoutes.post("", verifyAddressMiddleware, propertyController.create);
propertyRoutes.get("", propertyController.read);

export default propertyRoutes;
