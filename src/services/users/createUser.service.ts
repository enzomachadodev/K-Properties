import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { IUser, IUserRequest } from "../../interfaces/users.interfaces";
import { userResponseSerializer } from "../../serializers/user.serializers";

const createUserService = async (userData: IUserRequest): Promise<IUser> => {
	const userRepository = AppDataSource.getRepository(User);

	const userExists = await userRepository.findOneBy({
		email: userData.email,
	});

	if (userExists) {
		throw new AppError("students already exists", 409);
	}

	const createdUser = userRepository.create(userData);
	await userRepository.save(createdUser);

	const createdUserResponse = await userResponseSerializer.validate(createdUser, {
		stripUnknown: true,
	});

	return createdUserResponse;
};

export default createUserService;
