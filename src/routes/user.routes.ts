import { Router } from "express";
import {
	createUserController,
	deleteUserController,
	listUsersController,
	updateUserController,
} from "../controllers/users.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import { userRequestSerializer } from "../serializers/user.serializers";

const userRoutes = Router();

userRoutes.post("", ensureDataIsValidMiddleware(userRequestSerializer), createUserController);

userRoutes.get("", ensureAuthMiddleware, ensureIsAdminMiddleware, listUsersController);

userRoutes.patch("/:id", ensureAuthMiddleware, updateUserController);
userRoutes.delete("/:id", ensureAuthMiddleware, ensureIsAdminMiddleware, deleteUserController);

export default userRoutes;
