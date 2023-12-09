import AppDataSource from "@/data-source";
import Property from "@/entities/properties.entity";

export const propertyRepository = AppDataSource.getRepository(Property);
