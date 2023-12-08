import { ICategoryCreate } from "@/interfaces/categories.interfaces";
import { IUserCreate } from "../../interfaces/users.interfaces";
import { ISessionCreate } from "@/interfaces/session.interfaces";
import { IPropertyCreate } from "@/interfaces/properties.intefaces";
import { IScheduleCreate } from "@/interfaces/schedules.interfaces";

export const mockedUser: IUserCreate = {
	name: "Joana",
	email: "joana@mail.com",
	isAdm: false,
	password: "123456",
};

export const mockedAdmin: IUserCreate = {
	name: "Felipe",
	email: "felipe@mail.com",
	isAdm: true,
	password: "123456",
};

export const mockedUserLogin: ISessionCreate = {
	email: "joana@mail.com",
	password: "123456",
};

export const mockedAdminLogin: ISessionCreate = {
	email: "felipe@mail.com",
	password: "123456",
};

export const mockedCategory: ICategoryCreate = {
	name: "Apartamento",
};

export const mockedProperty: IPropertyCreate = {
	size: 350,
	value: 10000000,
	address: {
		district: "Rua Heleodo Pires de camargo",
		zipCode: "18150000",
		number: "67",
		city: "Piedade",
		state: "SP",
	},
	categoryId: "",
};

export const mockedProperty2: IPropertyCreate = {
	size: 350,
	value: 10000000,
	address: {
		district: "Rodovia Bunjiro Nakao",
		zipCode: "18170000",
		number: "42",
		city: "Ibiúna",
		state: "SP",
	},
	categoryId: "",
};

export const mockedPropertyInvalidZipCode: IPropertyCreate = {
	size: 350,
	value: 10000000,
	address: {
		district: "Rua Heleodo Pires de camargo",
		zipCode: "1815000033",
		number: "67",
		city: "Piedade",
		state: "SP",
	},
	categoryId: "",
};

export const mockedPropertyInvalidState: IPropertyCreate = {
	size: 350,
	value: 10000000,
	address: {
		district: "Rua Heleodo Pires de camargo",
		zipCode: "18150000",
		number: "67",
		city: "Piedade",
		state: "SPGO",
	},
	categoryId: "",
};

export const mockedPropertyInvalidCategoryId: IPropertyCreate = {
	size: 350,
	value: 10000000,
	address: {
		district: "Rua Heleodo Pires de camargo",
		zipCode: "18150000",
		number: "68",
		city: "Piedade",
		state: "SP",
	},
	categoryId: "8f9ae6ce-e36c-4d9d-9bd7-b4c98cb4e4f4",
};

export const mockedSchedule: IScheduleCreate = {
	date: "2022/08/12",
	hour: "10:30",
	propertyId: "",
	userId: "",
};

export const mockedScheduleInvalidPropertyId: IScheduleCreate = {
	date: "2022/08/12",
	hour: "10:30",
	propertyId: "b855d86b-d4c9-41cd-ab98-d7fa734c6ce4",
	userId: "",
};

export const mockedScheduleInvalidDate: IScheduleCreate = {
	date: "2022/08/20",
	hour: "10:30",
	propertyId: "",
	userId: "",
};

export const mockedScheduleInvalidHourLess8: IScheduleCreate = {
	date: "2022/08/17",
	hour: "5:30",
	propertyId: "",
	userId: "",
};

export const mockedScheduleInvalidHourMore18: IScheduleCreate = {
	date: "2022/08/17",
	hour: "18:30",
	propertyId: "",
	userId: "",
};

