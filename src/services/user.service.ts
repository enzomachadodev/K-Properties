import { IUserCreate, IUser, IUserUpdate } from "@/interfaces/users.interfaces";
import { userRepository } from "@/repositories";
import { loadUsersSchema, userSchema } from "@/schemas/user.schema";

const create = async (payload: IUserCreate): Promise<IUser> => {
  const newUser = userRepository.create(payload);
  await userRepository.save(newUser);
  return userSchema.parse(newUser);
};

const read = async () => {
  const users = await userRepository.find();
  return loadUsersSchema.parse(users);
};

const update = async (payload: IUserUpdate, id: string): Promise<IUser> => {
  const foundUser = await userRepository.findOneBy({ id });
  const updatedUser = await userRepository.save({ ...foundUser, ...payload });
  return userSchema.parse(updatedUser);
};

const destroy = async (id: string) => {
  const foundUser: any = await userRepository.findOneBy({ id });
  await userRepository.save({ ...foundUser, isActive: false });

  return;
};

export default { create, read, update, destroy };
