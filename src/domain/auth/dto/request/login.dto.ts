import { IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  @Length(3, 255)
  @IsNotEmpty()
  emailOrUsername: string;

  @IsNotEmpty()
  password: string;
}
