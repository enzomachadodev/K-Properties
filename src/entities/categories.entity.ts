import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Properties from "./properties.entity";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Properties, (property) => property.category)
  properties: Properties[];
}

export default Category;
