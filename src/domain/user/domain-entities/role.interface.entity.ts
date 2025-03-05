import { DomainBaseEntity } from 'src/share/entities';
import { v4 as uuidv4 } from 'uuid';

export class DomainRoleEntity extends DomainBaseEntity {
  private role: string;
  private scope?: string;

  constructor(params: {
    id?: string;
    createdBy?: string;
    updatedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
    role: string;
    scope?: string;
  }) {
    super({
      id: params.id ?? uuidv4(),
      createdBy: params.createdBy,
      updatedBy: params.updatedBy,
      createdAt: params.createdAt,
      updatedAt: params.updatedAt,
    });
    this.role = params.role;
    if (params.scope) this.scope = params.scope;
  }

  setRole(role: string): void {
    this.role = role;
  }
  setScope(scope: string): void {
    this.scope = scope;
  }

  getRole(): string {
    return this.role;
  }
  getScope(): string | undefined {
    return this.scope;
  }
}
