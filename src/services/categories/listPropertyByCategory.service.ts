import AppDataSource from "../../data-source";
import Categories from "../../entities/categories.entity";
import Property from "../../entities/properties.entity";
import AppError from "../../errors/AppError";

const listPropertyByCategoryService = async (categoryId: string) => {
	const categoriesRepository = AppDataSource.getRepository(Categories);

	const categoryExists = categoriesRepository.findOneBy({ id: categoryId });

	if (!categoryExists) {
		throw new AppError("category not exists", 404);
	}

	const propertiesByCategory = await AppDataSource.manager
		.createQueryBuilder(Property, "properties")
		.where("categoryId = :categoryId", { categoryId: categoryId })
		.getMany();

	const listPropertiesResponse = propertiesByCategory.map((e) => {
		return {
			id: e.id,
			sold: e.sold,
			value: e.value,
			size: e.size,
			createdAt: e.createdAt,
			updatedAt: e.updatedAt,
			address: e.address,
			categoryId: e.category?.id,
		};
	});

	return listPropertiesResponse;
};

export default listPropertyByCategoryService;
