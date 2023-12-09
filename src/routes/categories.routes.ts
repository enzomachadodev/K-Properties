import { categoryController } from "@/controllers";
import { Router } from "express";

const categoryRoutes = Router();

categoryRoutes.post("", categoryController.create);
categoryRoutes.get("", categoryController.read);

export default categoryRoutes;
