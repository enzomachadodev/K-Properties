import Categories from "../../entities/categories.entity";
import AppDataSource from "../../data-source";

const listCategoriesService = async () => {
	const categories = await AppDataSource.getRepository(Categories)
		.createQueryBuilder("categories")
		.getMany();

	return categories;
};

export default listCategoriesService;
