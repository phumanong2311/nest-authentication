import { DomainBaseEntity } from 'src/share/entities';
import { v4 as uuidv4 } from 'uuid';

export class DomainUserEntity extends DomainBaseEntity {
  public email: string;
  public username: string;
  public password?: string;
  public roleId?: string[];
  constructor(params: {
    id?: string;
    createdBy?: string;
    updatedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
    email: string;
    username: string;
    password?: string;
    roleId?: string[];
  }) {
    super({
      id: params.id ?? uuidv4(),
      createdBy: params.createdBy,
      updatedBy: params.updatedBy,
      createdAt: params.createdAt,
      updatedAt: params.updatedAt,
    });
    if (params.email) this.email = params.email;
    if (params.username) this.username = params.username;
    if (params.password) this.password = params.password;

    if (params.roleId) this.roleId = params.roleId;
  }

  public setEmail(email: string): void {
    this.email = email;
  }
  public setUserName(username: string): void {
    this.username = username;
  }
  public setPassword(password: string): void {
    this.password = password;
  }

  public setRoleId(roleId: string[]): void {
    this.roleId = roleId;
  }

  public getEmail(): string {
    return this.email;
  }
  public getUserName(): string {
    return this.username;
  }
  public getPassword(): string {
    return this.password;
  }
  public getRoleId(): string[] {
    return this.roleId;
  }
}
