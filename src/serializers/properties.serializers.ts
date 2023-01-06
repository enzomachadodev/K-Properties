import * as yup from "yup";
import { SchemaOf } from "yup";
import { IAddressRequest, IPropertyRequest } from "../interfaces/properties.intefaces";

export const addressRequestSerializer: SchemaOf<IAddressRequest> = yup.object().shape({
	district: yup.string().required(),
	zipCode: yup.string().max(8).required(),
	number: yup.string().notRequired(),
	city: yup.string().required(),
	state: yup.string().max(2).required(),
});

export const propertyResponseSerializer: SchemaOf<IPropertyRequest> = yup.object().shape({
	value: yup.number().required(),
	size: yup.number().required(),
	address: yup.object().shape({
		id: yup.string().required(),
		district: yup.string().required(),
		zipCode: yup.string().max(8).required(),
		number: yup.string().notRequired(),
		city: yup.string().required(),
		state: yup.string().max(2).required(),
	}),
	categoryId: yup.string().required(),
});
