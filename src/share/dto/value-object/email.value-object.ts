import { BadRequestException } from '@nestjs/common';

export class Email {
  private readonly email: string;

  constructor(email: string) {
    if (!this.validateEmail(email)) {
      throw new BadRequestException('Invalid email format');
    }
    this.email = email;
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  public getValue(): string {
    return this.email;
  }
}
