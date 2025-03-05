import { DomainBaseEntity } from 'src/share/entities';

export class DomainUserSocialLogin extends DomainBaseEntity {
  private userId!: string;
  private provider?: string;
  private providerId?: string;
  private isSocialLogin?: boolean;
  private authProviderToken?: string;

  constructor(params: {
    id?: string;
    createdBy?: string;
    updatedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
    userId: string;
    provider?: string;
    providerId?: string;
    isSocialLogin?: boolean;
    authProviderToken?: string;
  }) {
    super({
      id: params.id,
      createdBy: params.createdBy,
      updatedBy: params.updatedBy,
      createdAt: params.createdAt,
      updatedAt: params.updatedAt,
    });
    this.userId = params.userId;
    if (params.provider) this.provider = params.provider;
    if (params.providerId) this.providerId = params.providerId;
    if (params.isSocialLogin !== undefined)
      this.isSocialLogin = params.isSocialLogin;
    if (params.authProviderToken)
      this.authProviderToken = params.authProviderToken;
  }

  setUser(userId: string): void {
    this.userId = userId;
  }
  setProvider(provider: string): void {
    this.provider = provider;
  }
  setProviderId(providerId: string): void {
    this.providerId = providerId;
  }
  setIsSocialLogin(isSocialLogin: boolean): void {
    this.isSocialLogin = isSocialLogin;
  }
  setAuthProviderToken(authProviderToken: string): void {
    this.authProviderToken = authProviderToken;
  }

  getUser(): string {
    return this.userId;
  }
  getProvider(): string | undefined {
    return this.provider;
  }
  getProviderId(): string | undefined {
    return this.providerId;
  }
  getIsSocialLogin(): boolean | undefined {
    return this.isSocialLogin;
  }
  getAuthProviderToken(): string | undefined {
    return this.authProviderToken;
  }
}
