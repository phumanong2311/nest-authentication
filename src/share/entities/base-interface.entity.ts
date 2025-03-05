export abstract class IDomainBaseEntity {
  protected id!: string;
  protected createdAt?: Date;
  protected updatedAt?: Date;
  protected createdBy?: string;
  protected updatedBy?: string;
}
