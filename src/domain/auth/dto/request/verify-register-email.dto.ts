import { IsNotEmpty } from "class-validator";

export class VerifyRegisterEmailDto {
  @IsNotEmpty()
  token: string;
}
