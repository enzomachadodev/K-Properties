import { ICategoryCreate } from "@/interfaces/categories.interfaces";
import { categoryRepository } from "@/repositories";

const create = async ({ name }: ICategoryCreate) => {
  const newCategory = categoryRepository.create({ name });
  await categoryRepository.save(newCategory);
  return newCategory;
};

const read = async () => {
  const categories = categoryRepository.find();
  return categories;
};

const readPropertiesByCategoryId = async (categoryId: string) => {
  const properties = await categoryRepository.findOne({
    where: { id: categoryId },
    select: {
      id: true,
      name: true,
    },
    relations: {
      properties: {
        address: true,
      },
    },
  });

  return properties;
};

export default { create, read, readPropertiesByCategoryId };
