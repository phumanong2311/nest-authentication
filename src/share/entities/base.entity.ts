import { v4 as uuidv4 } from 'uuid';
import { IDomainBaseEntity } from './base-interface.entity';
export abstract class DomainBaseEntity implements IDomainBaseEntity {
  public id!: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public createdBy?: string;
  public updatedBy?: string;
  constructor(params: {
    id?: string;
    createdBy?: string;
    updatedBy?: string;
    createdAt: Date;
    updatedAt: Date;
  }) {
    this.id = params.id ?? uuidv4();
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
    this.createdBy = params.createdBy;
    this.updatedBy = params.updatedBy;
  }
  setId(id: string): void {
    this.id = id;
  }

  setCreatedAt(date: Date): void {
    this.createdAt = date;
  }

  setUpdatedAt(date: Date): void {
    this.updatedAt = date;
  }

  setCreatedBy(userId: string): void {
    this.createdBy = userId;
  }

  setUpdatedBy(userId: string): void {
    this.updatedBy = userId;
  }

  getId(): string {
    return this.id;
  }

  getCreatedAt(): Date | undefined {
    return this.createdAt;
  }

  getUpdatedAt(): Date | undefined {
    return this.updatedAt;
  }

  getCreatedBy(): string | undefined {
    return this.createdBy;
  }

  getUpdatedBy(): string | undefined {
    return this.updatedBy;
  }

  updateTimestamp(updatedBy: string): void {
    this.updatedAt = new Date();
    this.updatedBy = updatedBy;
  }
}
