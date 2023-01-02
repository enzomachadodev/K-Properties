import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Property from "./properties.entity";

@Entity("addresses")
class Addresses {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	district: string;

	@Column()
	zipCode: string;

	@Column({ type: "integer" })
	number: number;

	@Column()
	city: string;

	@Column()
	state: string;

	@OneToOne(() => Property, (property) => property.address)
	property: Property;
}

export default Addresses;
