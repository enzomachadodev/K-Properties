import { IAddressCreate } from "@/interfaces/properties.intefaces";
import { addressRepository } from "@/repositories/address.repository";

const create = async (address: IAddressCreate) => {
  const newAdress = await addressRepository.save(address);
  await addressRepository.save(newAdress);
  return newAdress;
};

export default { create };
