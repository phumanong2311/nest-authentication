import { DomainBaseEntity } from 'src/share/entities';
import { v4 as uuidv4 } from 'uuid';

export class DomainUserInfoEntity extends DomainBaseEntity {
  public userId: string;
  public ipAddress?: string;
  public browser?: string;
  public operatingSystem?: string;
  public version?: string;
  public platform?: string;
  public source?: string;
  public deviceType?: string;
  public firstName: string;
  public lastName: string;
  public phoneNumber: string;
  public dateOfBirth?: number;
  public isActive: boolean;
  public isEmailVerified?: boolean;
  public isPhoneVerified?: boolean;
  public avatarUrl?: string;

  constructor(params: {
    id?: string;
    createdBy?: string;
    updatedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
    userId: string;
    ipAddress?: string;
    browser?: string;
    operatingSystem?: string;
    version?: string;
    platform?: string;
    source?: string;
    deviceType?: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    dateOfBirth?: number;
    isActive: boolean;
    isEmailVerified?: boolean;
    isPhoneVerified?: boolean;
    avatarUrl?: string;
  }) {
    super({
      id: params.id ?? uuidv4(),
      createdBy: params.createdBy,
      updatedBy: params.updatedBy,
      createdAt: params.createdAt,
      updatedAt: params.updatedAt,
    });
    this.userId = params.userId;
    if (params.ipAddress) this.ipAddress = params.ipAddress;
    if (params.browser) this.browser = params.browser;
    if (params.operatingSystem) this.operatingSystem = params.operatingSystem;
    if (params.version) this.version = params.version;
    if (params.platform) this.platform = params.platform;
    if (params.source) this.source = params.source;
    if (params.deviceType) this.deviceType = params.deviceType;
    if (params.firstName) this.firstName = params.firstName;
    if (params.lastName) this.lastName = params.lastName;
    if (params.phoneNumber) this.phoneNumber = params.phoneNumber;
    if (params.dateOfBirth) this.dateOfBirth = params.dateOfBirth;
    if (params.isActive) this.isActive = params.isActive;
    if (params.isEmailVerified) this.isEmailVerified = params.isEmailVerified;
    if (params.isPhoneVerified) this.isPhoneVerified = params.isPhoneVerified;
    if (params.avatarUrl) this.avatarUrl = params.avatarUrl;
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }
  public setIpAddress(ipAddress: string): void {
    this.ipAddress = ipAddress;
  }
  public setBrowser(browser: string): void {
    this.browser = browser;
  }
  public setOperatingSystem(operatingSystem: string): void {
    this.operatingSystem = operatingSystem;
  }
  public setVersion(version: string): void {
    this.version = version;
  }
  public setPlatform(platform: string): void {
    this.platform = platform;
  }
  public setSource(source: string): void {
    this.source = source;
  }
  public setDeviceType(deviceType: string): void {
    this.deviceType = deviceType;
  }
  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }
  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }
  public setPhoneNumber(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
  }
  public setDateOfBirth(dateOfBirth: number): void {
    this.dateOfBirth = dateOfBirth;
  }
  public setIsActive(isActive: boolean): void {
    this.isActive = isActive;
  }
  public setIsEmailVerified(isEmailVerified: boolean): void {
    this.isEmailVerified = isEmailVerified;
  }
  public setIsPhoneVerified(isPhoneVerified: boolean): void {
    this.isPhoneVerified = isPhoneVerified;
  }
  public setAvatarUrl(avatarUrl: string): void {
    this.avatarUrl = avatarUrl;
  }

  public getUserId(): string {
    return this.userId;
  }
  public getIpAddress(): string | undefined {
    return this.ipAddress;
  }
  public getBrowser(): string | undefined {
    return this.browser;
  }
  public getOperatingSystem(): string | undefined {
    return this.operatingSystem;
  }
  public getVersion(): string | undefined {
    return this.version;
  }
  public getPlatform(): string | undefined {
    return this.platform;
  }
  public getSource(): string | undefined {
    return this.source;
  }
  public getDeviceType(): string | undefined {
    return this.deviceType;
  }
  public getName(): string {
    return this.firstName + ' ' + this.lastName;
  }
  public getPhoneNumber(): string {
    return this.phoneNumber;
  }
  public getDateOfBirth(): number {
    return this.dateOfBirth;
  }
  public getIsActive(): boolean {
    return this.isActive;
  }
  public getIsEmailVerified(): boolean {
    return this.isEmailVerified;
  }
  public getIsPhoneVerified(): boolean {
    return this.isPhoneVerified;
  }
  public getAvatarUrl(): string {
    return this.avatarUrl;
  }
}
