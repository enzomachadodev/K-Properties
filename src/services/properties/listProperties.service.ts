import AppDataSource from "../../data-source";
import Property from "../../entities/properties.entity";

const listPropertiesService = async () => {
	const propertiesRepository = AppDataSource.getRepository(Property);

	const properties = await propertiesRepository.find({
		relations: {
			address: true,
			category: true,
		},
	});

	const listPropertiesResponse = properties.map((e) => {
		return {
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

export default listPropertiesService;
