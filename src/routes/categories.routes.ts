import { Router } from "express";

const categoryRoutes = Router();

categoryRoutes.post("");
categoryRoutes.get("/:id/properties");

export default categoryRoutes;
