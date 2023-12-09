import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Categories from "./categories.entity";

import Addresses from "./addresses.entity";
import Schedules from "./schedules.entity";

@Entity("properties")
class Property {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Addresses)
  @JoinColumn()
  address: Addresses;

  @ManyToOne(() => Categories, (Categories) => Categories)
  @JoinColumn()
  category: Categories;

  @OneToMany(() => Schedules, (schedules) => schedules.property)
  schedules: Schedules[];
}

export default Property;
