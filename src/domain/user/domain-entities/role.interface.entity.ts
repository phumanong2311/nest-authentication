import { DomainBaseEntity } from 'src/share/entities';
import { v4 as uuidv4 } from 'uuid';
import { IRole } from '../interface-entities';

export class DomainRoleEntity extends DomainBaseEntity implements IRole {
  public role: string;
  public scope?: string;
  public userIds: string[];

  constructor(params: {
    id?: string;
    createdBy?: string;
    updatedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
    role: string;
    scope?: string;
    userIds?: string[];
  }) {
    super({
      id: params.id ?? uuidv4(),
      createdBy: params.createdBy,
      updatedBy: params.updatedBy,
      createdAt: params.createdAt,
      updatedAt: params.updatedAt,
    });
    this.role = params.role;
    this.scope = params.scope;
    this.userIds = params.userIds ?? [];
  }

  public setRole(role: string): void {
    this.role = role;
  }

  public setScope(scope: string): void {
    this.scope = scope;
  }

  public addUser(userId: string): void {
    if (!this.userIds.includes(userId)) {
      this.userIds.push(userId);
    }
  }

  public getRole(): string {
    return this.role;
  }

  public getScope(): string | undefined {
    return this.scope;
  }

  public getUserIds(): string[] {
    return this.userIds;
  }
}
