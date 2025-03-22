import { Role, User } from 'src/infra/postgres/entities';
import { DomainUserEntity } from '../domain-entities';
import { Collection } from '@mikro-orm/core';

export class UserMapper {
  static entityInfraToDomain(infra: User): DomainUserEntity {
    return new DomainUserEntity({
      id: infra.id,
      email: infra.email,
      username: infra.username,
      password: infra.password,
      createdBy: infra.createdBy,
      updatedBy: infra.updatedBy,
      createdAt: infra.createdAt,
      updatedAt: infra.updatedAt,
    });
  }
  static entityDomainToInfra(domain: Partial<DomainUserEntity>): User {
    const infra = new User();
    if (domain.getId) infra.id = domain.getId();
    if (domain.getEmail) infra.email = domain.getEmail();
    if (domain.getUserName) infra.username = domain.getUserName();
    if (domain.getPassword) infra.password = domain.getPassword();
    if (domain.getEmail) infra.email = domain.getEmail();
    if (domain.getRoleId) {
      infra.roleIds = new Collection<Role>(infra);
    }
    if (domain.getCreatedAt) infra.createdAt = domain.getCreatedAt();
    if (domain.getUpdatedAt) infra.updatedAt = domain.getUpdatedAt();
    if (domain.getCreatedBy) infra.createdBy = domain.getCreatedBy();
    if (domain.getUpdatedBy) infra.updatedBy = domain.getUpdatedBy();
    return infra;
  }
}
