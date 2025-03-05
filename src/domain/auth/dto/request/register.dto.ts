import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Email } from 'src/share/dto/value-object';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: Email;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password!: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsOptional()
  dateOfBirth?: Date;
}
