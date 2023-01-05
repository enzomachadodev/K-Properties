import AppDataSource from "../../data-source";
import Property from "../../entities/properties.entity";
import Addresses from "../../entities/addresses.entity";
import { IAddressRequest, IPropertyRequest } from "../../interfaces/properties.intefaces";
import AppError from "../../errors/AppError";

const createPropertiesService = async (
	propertyData: IPropertyRequest,
	addressData: IAddressRequest
) => {
	const addressesRepository = AppDataSource.getRepository(Addresses);
	const propertiesRepository = AppDataSource.getRepository(Property);

	const addressesExists = await addressesRepository
		.createQueryBuilder("addresses")
		.where(
			"addresses.district = :district AND addresses.zipCode = :zipCode AND addresses.number = :number AND addresses.city = :city AND addresses.state = :state",
			{
				district: propertyData.address.district,
				zipCode: propertyData.address.zipCode,
				number: propertyData.address.number,
				city: propertyData.address.city,
				state: propertyData.address.state,
			}
		)
		.getOne();

	console.log("\n @@@@@@@@@@@@@@@@@@@@@@@@@@ \n", addressesExists);

	if (addressesExists) {
		throw new AppError("Addresses already exists", 409);
	}

	const newAddress = addressesRepository.create(addressData);

	return addressesExists;
};

export default createPropertiesService;
