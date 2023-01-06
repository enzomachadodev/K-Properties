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

	@Column({ nullable: true })
	number: string;

	@Column()
	city: string;

	@Column()
	state: string;
}

export default Addresses;
