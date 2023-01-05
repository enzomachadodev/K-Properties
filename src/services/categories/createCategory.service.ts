import AppDataSource from "../../data-source";
import Categories from "../../entities/categories.entity";
import AppError from "../../errors/AppError";
import { ICategoryRequest } from "../../interfaces/categories.interfaces";

const createCategoryService = async (data: ICategoryRequest) => {
	const categoryRepository = AppDataSource.getRepository(Categories);

	const categoryExist = await categoryRepository
		.createQueryBuilder("categories")
		.where("name = :name", { name: data.name })
		.getOne();

	if (categoryExist) {
		throw new AppError("Category already exists", 409);
	}

	const newCategory = categoryRepository.create(data);

	await categoryRepository.save(newCategory);

	return newCategory;
};

export default createCategoryService;
