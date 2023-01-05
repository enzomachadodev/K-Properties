import { Request, Response } from "express";
import createCategoryService from "../services/categories/createCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";
import listPropertyByCategoryService from "../services/categories/listPropertyByCategory.service";

export const createCategoryController = async (req: Request, res: Response) => {
	const newCategory = await createCategoryService(req.body);
	return res.status(201).json(newCategory);
};

export const listCategoriesController = async (req: Request, res: Response) => {
	const categories = await listCategoriesService();
	return res.status(200).json(categories);
};

export const listPropertyByCategoryController = async (req: Request, res: Response) => {
	const properties = await listPropertyByCategoryService(req.params.id);
	return res.status(200).json(properties);
};
