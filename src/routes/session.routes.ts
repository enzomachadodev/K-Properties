import { Router } from "express";
import { createSessionController } from "../controllers/session.controller";
import { userLoginSerializer } from "../serializers/user.serializers";

const sessionRoutes = Router();

sessionRoutes.post("", createSessionController);

export default sessionRoutes;
