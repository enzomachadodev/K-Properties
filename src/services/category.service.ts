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

export default { create, read };
