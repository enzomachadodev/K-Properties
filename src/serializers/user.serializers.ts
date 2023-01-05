import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUser, IUserLogin, IUserRequest, IUserUpdate } from "../interfaces/users.interfaces";

export const userLoginSerializer: SchemaOf<IUserLogin> = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().required(),
});

export const userResponseSerializer: SchemaOf<IUser> = yup.object().shape({
	id: yup.string().required(),
	name: yup.string().required(),
	email: yup.string().email().required(),
	isAdm: yup.boolean().required(),
	isActive: yup.boolean().required(),
	createdAt: yup.date().required(),
	updatedAt: yup.date().required(),
});

export const listUserResponseSerializer: SchemaOf<IUser[]> = yup.array(userResponseSerializer);

export const userRequestSerializer: SchemaOf<IUserRequest> = yup.object().shape({
	email: yup.string().email().required(),
	name: yup.string().required(),
	password: yup.string().required(),
	isAdm: yup.boolean().required(),
});

export const userUpdateSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
	email: yup.string().email().notRequired(),
	name: yup.string().notRequired(),
	password: yup.string().notRequired(),
});
