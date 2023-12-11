import { AppError } from "@/errors/AppError";
import { IPropertyCreate } from "@/interfaces/properties.intefaces";
import { categoryRepository, propertyRepository } from "@/repositories";

const create = async (payload: IPropertyCreate) => {
  const category = await categoryRepository.findOneBy({
    id: payload.categoryId,
  });
  if (!category) throw new AppError("Category not found", 404);
  let newProperty = propertyRepository.create(payload);
  newProperty = await propertyRepository.save(newProperty);
  const property = await propertyRepository.findOne({
    where: { id: newProperty.id },
    relations: ["address", "category"],
  });
  return property;
};

const read = async () => {
  return await propertyRepository.find();
};

export default { create, read };
