export abstract class IDomainBaseEntity {
  public id!: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: string;
  public updatedBy?: string;
}
