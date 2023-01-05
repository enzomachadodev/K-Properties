import AppDataSource from "../../data-source";
import Property from "../../entities/properties.entity";

const listPropertyByCategoryService = async (categoryId: string) => {
	const propertiesByCategory = await AppDataSource.manager
		.createQueryBuilder(Property, "properties")
		.where("categoryId = :categoryId", { categoryId: categoryId })
		.getMany();

	return propertiesByCategory;
};

export default listPropertyByCategoryService;
