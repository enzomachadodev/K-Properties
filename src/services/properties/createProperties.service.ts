import AppDataSource from "../../data-source";
import Property from "../../entities/properties.entity";
import Addresses from "../../entities/addresses.entity";
import { IAddressRequest, IPropertyRequest } from "../../interfaces/properties.intefaces";
import AppError from "../../errors/AppError";
import Categories from "../../entities/categories.entity";
import { propertyResponseSerializer } from "../../serializers/properties.serializers";

const createPropertiesService = async ({
	value,
	size,
	address: { district, zipCode, number, city, state },
	categoryId,
}: IPropertyRequest) => {
	const addressesRepository = AppDataSource.getRepository(Addresses);
	const propertiesRepository = AppDataSource.getRepository(Property);
	const categoriesRepository = AppDataSource.getRepository(Categories);

	const findCategory = await categoriesRepository.findOneBy({ id: categoryId });

	if (!findCategory) {
		throw new AppError("this category not exists", 404);
	}

	const findAddress = await addressesRepository.findOne({
		where: [
			{
				district: district,
				zipCode: zipCode,
				number: number,
				city: city,
				state: state,
			},
		],
	});

	if (findAddress) {
		throw new AppError("this addresses already exists", 409);
	}

	const newAddress = addressesRepository.create({
		district,
		zipCode,
		number,
		city,
		state,
	});

	await addressesRepository.save(newAddress);

	const newProperty = propertiesRepository.create({
		value,
		size,
		address: newAddress,
		category: findCategory,
	});
	console.log("\n @@@@@@@@@@@@@@@@@@@@@", newProperty);

	await propertiesRepository.save(newProperty);

	const propertyResponse = {
		id: newProperty.id,
		sold: newProperty.sold,
		value: newProperty.value,
		size: newProperty.size,
		createdAt: newProperty.createdAt,
		updatedAt: newProperty.updatedAt,
		address: newProperty.address,
		categoryId: newProperty.category.id,
	};

	const propertyResponseValidated = await propertyResponseSerializer.validate(propertyResponse, {
		stripUnknown: true,
	});

	return propertyResponseValidated;
};

export default createPropertiesService;
