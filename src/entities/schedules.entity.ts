import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Property from "./properties.entity";
import User from "./user.entity";

@Entity("schedules")
class Schedules {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	date: Date;

	@Column({ type: "time" })
	hour: Date;

	@ManyToOne(() => Property, (property) => property.schedules)
	property: Property;

	@ManyToOne(() => User, (user) => user.schedules)
	user: User;
}

export default Schedules;
