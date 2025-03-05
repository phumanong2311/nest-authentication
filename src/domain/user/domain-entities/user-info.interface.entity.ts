import { DomainBaseEntity } from 'src/share/entities';
import { v4 as uuidv4 } from 'uuid';

export class DomainUserInfoEntity extends DomainBaseEntity {
  private userId: string;
  private ipAddress?: string;
  private browser?: string;
  private operatingSystem?: string;
  private version?: string;
  private platform?: string;
  private source?: string;
  private deviceType?: string;

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
  }

  setUserId(userId: string): void {
    this.userId = userId;
  }
  setIpAddress(ipAddress: string): void {
    this.ipAddress = ipAddress;
  }
  setBrowser(browser: string): void {
    this.browser = browser;
  }
  setOperatingSystem(operatingSystem: string): void {
    this.operatingSystem = operatingSystem;
  }
  setVersion(version: string): void {
    this.version = version;
  }
  setPlatform(platform: string): void {
    this.platform = platform;
  }
  setSource(source: string): void {
    this.source = source;
  }
  setDeviceType(deviceType: string): void {
    this.deviceType = deviceType;
  }

  getUserId(): string {
    return this.userId;
  }
  getIpAddress(): string | undefined {
    return this.ipAddress;
  }
  getBrowser(): string | undefined {
    return this.browser;
  }
  getOperatingSystem(): string | undefined {
    return this.operatingSystem;
  }
  getVersion(): string | undefined {
    return this.version;
  }
  getPlatform(): string | undefined {
    return this.platform;
  }
  getSource(): string | undefined {
    return this.source;
  }
  getDeviceType(): string | undefined {
    return this.deviceType;
  }
}
