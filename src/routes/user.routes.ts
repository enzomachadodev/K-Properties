import { Router } from "express";
import { userController } from "@/controllers";
import {
  verifyUserExistsMiddleware,
  verifyUserIsActiveMiddleware,
  verifyAdminMiddleware,
  verifyAuthMiddleware,
  verifyBodyMiddleware,
  verifyUserEmailMiddleware,
  verifyOwnerMiddleware,
} from "@/middlewares";
import { userCreateSchema, userUpdateSchema } from "@/schemas/user.schema";

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
userRoutes.patch(
  "/:id",
  verifyAuthMiddleware,
  verifyUserExistsMiddleware,
  verifyOwnerMiddleware,
  verifyBodyMiddleware(userUpdateSchema),
  userController.update,
);
userRoutes.delete(
  "/:id",
  verifyAuthMiddleware,
  verifyAdminMiddleware,
  verifyUserExistsMiddleware,
  verifyUserIsActiveMiddleware,
  userController.destroy,
);

export default userRoutes;
