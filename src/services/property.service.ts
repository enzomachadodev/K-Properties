import { IPropertyCreate } from "@/interfaces/properties.intefaces";
import { propertyRepository } from "@/repositories";

const create = async (payload: IPropertyCreate) => {
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
