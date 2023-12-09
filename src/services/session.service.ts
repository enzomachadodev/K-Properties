import { AppError } from "@/errors/AppError";
import { ISessionCreate } from "@/interfaces/session.interfaces";
import { userRepository } from "@/repositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

const create = async ({ email, password }: ISessionCreate): Promise<string> => {
  const foundUser = await userRepository.findOneBy({
    email,
  });

  if (!foundUser) {
    throw new AppError("invalid email or password", 403);
  }

  if (!foundUser.isActive) {
    throw new AppError("this account has been deactivated", 400);
  }

  const passwordMatch = await compare(password, foundUser.password);

  if (!passwordMatch) {
    throw new AppError("User or password invalid!", 403);
  }

  const token: string = sign(
    { isAdm: foundUser.isAdm },
    process.env.SECRET_KEY!,
    {
      subject: foundUser.id.toString(),
      expiresIn: process.env.EXPIRES_IN!,
    },
  );

  return token;
};

export default { create };
