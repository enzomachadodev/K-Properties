import AppDataSource from "@/data-source";
import Categories from "@/entities/categories.entity";

export const categoryRepository = AppDataSource.getRepository(Categories);
