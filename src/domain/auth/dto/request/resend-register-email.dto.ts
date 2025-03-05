import { IsEmail, IsNotEmpty } from "class-validator";
import { Email } from "src/share/dto/value-object";

export class ResendRegisterEmailDto {
  @IsEmail()
  @IsNotEmpty()
  email: Email;
}
