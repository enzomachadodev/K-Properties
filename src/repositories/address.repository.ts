import AppDataSource from "@/data-source";
import Address from "@/entities/addresses.entity";

export const addressRepository = AppDataSource.getRepository(Address);
