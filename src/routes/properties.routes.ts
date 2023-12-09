import { Router } from "express";
import { propertyController } from "@/controllers";

const propertyRoutes = Router();

propertyRoutes.post("", propertyController.create);
propertyRoutes.get("", propertyController.read);
propertyRoutes.get("/category/:id", propertyController.readByCategoryId);

export default propertyRoutes;
