import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Property from "./properties.entity";
import User from "./user.entity";

@Entity("schedule")
class Schedule {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => Property)
  property: Property;

  @ManyToOne(() => User)
  user: User;
}

export default Schedule;
