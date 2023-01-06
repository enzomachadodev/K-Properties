import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { listUserResponseSerializer } from "../../serializers/user.serializers";

const listUsersService = async () => {
	const userRepository = AppDataSource.getRepository(User);

	const users = await userRepository.find();

	const usersListValidated = await listUserResponseSerializer.validate(users, {
		stripUnknown: true,
	});

	return usersListValidated;
};

export default listUsersService;
