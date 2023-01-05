import AppDataSource from "../../data-source";
import Property from "../../entities/properties.entity";

const listPropertiesService = async () => {
	const properties = await AppDataSource.getRepository(Property)
		.createQueryBuilder("properties")
		.getMany();

	return properties;
};

export default listPropertiesService;
