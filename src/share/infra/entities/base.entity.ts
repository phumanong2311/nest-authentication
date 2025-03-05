import { PrimaryKey, Property } from "@mikro-orm/core";

export class BaseEntity {
  @PrimaryKey({ autoincrement: true })
  id!: number;

  @Property({ nullable: true })
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date(), nullable: true })
  updatedAt: Date = new Date();
}
