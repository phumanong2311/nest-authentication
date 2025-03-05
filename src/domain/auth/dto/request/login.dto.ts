import { IsEmail, IsNotEmpty } from "class-validator";
import { Email } from "src/share/dto/value-object";

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: Email;

  @IsNotEmpty()
  password: string;
}
