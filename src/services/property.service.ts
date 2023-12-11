import { AppError } from "@/errors/AppError";
import { IPropertyCreate } from "@/interfaces/properties.intefaces";
import { propertyRepository } from "@/repositories";
import { addressRepository } from "@/repositories/address.repository";
import { propertyCreateSchema } from "@/schemas/property.schema";

const create = async ({ address, ...payload }: IPropertyCreate) => {
  const foundAddress = await addressRepository.findOneBy({ ...address });
  if (foundAddress) throw new AppError("this addresses already exists", 409);
  const newAddress = addressRepository.create({ ...address });
  await addressRepository.save(newAddress);
  const newProperty = propertyRepository.create({
    ...payload,
    address: newAddress,
  });
  await propertyRepository.save(newProperty);
  return propertyCreateSchema.parse(newProperty);
};

const read = async () => {
  return await propertyRepository.find();
};

export default { create, read };
