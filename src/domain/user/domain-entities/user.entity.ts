import { DomainBaseEntity } from 'src/share/entities';
import { v4 as uuidv4 } from 'uuid';

export class DomainUserEntity extends DomainBaseEntity {
  private email: string;
  private username: string;
  private password?: string;
  private firstName: string;
  private lastName: string;
  private phoneNumber: string;
  private dateOfBirth?: number;
  private isActive: boolean;
  private isEmailVerified?: boolean;
  private isPhoneVerified?: boolean;
  private avatarUrl?: string;
  private roleId?: string[];
  constructor(params: {
    id?: string;
    createdBy?: string;
    updatedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
    email: string;
    username: string;
    password?: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    dateOfBirth?: number;
    isActive: boolean;
    isEmailVerified?: boolean;
    isPhoneVerified?: boolean;
    avatarUrl?: string;
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
    if (params.firstName) this.firstName = params.firstName;
    if (params.lastName) this.lastName = params.lastName;
    if (params.phoneNumber) this.phoneNumber = params.phoneNumber;
    if (params.dateOfBirth) this.dateOfBirth = params.dateOfBirth;
    if (params.isActive) this.isActive = params.isActive;
    if (params.isEmailVerified) this.isEmailVerified = params.isEmailVerified;
    if (params.isPhoneVerified) this.isPhoneVerified = params.isPhoneVerified;
    if (params.avatarUrl) this.avatarUrl = params.avatarUrl;
    if (params.roleId) this.roleId = params.roleId;
  }
  setEmail(email: string): void {
    this.email = email;
  }
  setUserName(username: string): void {
    this.username = username;
  }
  setPassword(password: string): void {
    this.password = password;
  }
  setFirstName(firstName: string): void {
    this.firstName = firstName;
  }
  setLastName(lastName: string): void {
    this.lastName = lastName;
  }
  setPhoneNumber(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
  }
  setDateOfBirth(dateOfBirth: number): void {
    this.dateOfBirth = dateOfBirth;
  }
  setIsActive(isActive: boolean): void {
    this.isActive = isActive;
  }
  setIsEmailVerified(isEmailVerified: boolean): void {
    this.isEmailVerified = isEmailVerified;
  }
  setIsPhoneVerified(isPhoneVerified: boolean): void {
    this.isPhoneVerified = isPhoneVerified;
  }
  setAvatarUrl(avatarUrl: string): void {
    this.avatarUrl = avatarUrl;
  }
  setRoleId(roleId: string[]): void {
    this.roleId = roleId;
  }

  getEmail(): string {
    return this.email;
  }
  getUserName(): string {
    return this.username;
  }
  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }
  getPhoneNumber(): string {
    return this.phoneNumber;
  }
  getDateOfBirth(): number {
    return this.dateOfBirth;
  }
  getIsActive(): boolean {
    return this.isActive;
  }
  getIsEmailVerified(): boolean {
    return this.isEmailVerified;
  }
  getIsPhoneVerified(): boolean {
    return this.isPhoneVerified;
  }
  getAvatarUrl(): string {
    return this.avatarUrl;
  }
  getRoleId(): string[] {
    return this.roleId;
  }
}
