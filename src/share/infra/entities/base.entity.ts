import { PrimaryKey, Property } from '@mikro-orm/core';

export class BaseEntity {
  @PrimaryKey({ autoincrement: true })
  public id!: string;

  @Property({ onCreate: () => new Date(), nullable: true })
  public createdAt!: Date;

  @Property({ onUpdate: () => new Date(), nullable: true })
  public updatedAt: Date;

  @Property({ nullable: true })
  public createdBy: string;

  @Property({ nullable: true })
  public updatedBy: string;
}
