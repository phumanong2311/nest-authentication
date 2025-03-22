import { DomainBaseEntity } from 'src/share/entities';

export class DomainUserSocialLogin extends DomainBaseEntity {
  public userId!: string;
  public provider?: string;
  public providerId?: string;
  public isSocialLogin?: boolean;
  public authProviderToken?: string;

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

  public setUser(userId: string): void {
    this.userId = userId;
  }
  public setProvider(provider: string): void {
    this.provider = provider;
  }
  public setProviderId(providerId: string): void {
    this.providerId = providerId;
  }
  public setIsSocialLogin(isSocialLogin: boolean): void {
    this.isSocialLogin = isSocialLogin;
  }
  public setAuthProviderToken(authProviderToken: string): void {
    this.authProviderToken = authProviderToken;
  }

  public getUser(): string {
    return this.userId;
  }
  public getProvider(): string | undefined {
    return this.provider;
  }
  public getProviderId(): string | undefined {
    return this.providerId;
  }
  public getIsSocialLogin(): boolean | undefined {
    return this.isSocialLogin;
  }
  public getAuthProviderToken(): string | undefined {
    return this.authProviderToken;
  }
}
