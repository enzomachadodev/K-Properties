import { Router } from "express";
import { userController } from "@/controllers";
import {
  verifyAdminMiddleware,
  verifyAuthMiddleware,
  verifyBodyMiddleware,
  verifyUserEmailMiddleware,
} from "@/middlewares";
import { userCreateSchema } from "@/schemas/user.schema";

const userRoutes = Router();

userRoutes.post(
  "",
  verifyBodyMiddleware(userCreateSchema),
  verifyUserEmailMiddleware,
  userController.create,
);
userRoutes.get(
  "",
  verifyAuthMiddleware,
  verifyAdminMiddleware,
  userController.read,
);
userRoutes.patch("/:id", userController.update);
userRoutes.delete(
  "/:id",
  verifyAuthMiddleware,
  verifyAdminMiddleware,
  userController.destroy,
);

export default userRoutes;
