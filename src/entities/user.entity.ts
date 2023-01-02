import { hashSync, getRounds } from "bcryptjs";
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	BeforeInsert,
	BeforeUpdate,
	OneToMany,
} from "typeorm";
import Schedules from "./schedules.entity";

@Entity("users")
class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	name: string;

	@Column({ unique: true })
	email: string;

	@Column()
	isAdm: boolean;

	@Column({ default: true })
	isActive: boolean;

	@Column()
	password: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@BeforeUpdate()
	@BeforeInsert()
	hashPassword() {
		const isEncrypted = getRounds(this.password);
		if (!isEncrypted) {
			this.password = hashSync(this.password, 10);
		}
	}

	@OneToMany(() => Schedules, (schedule) => schedule.user)
	schedules: Schedules[];
}

export default User;
