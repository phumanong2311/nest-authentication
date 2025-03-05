import { IsNotEmpty } from "class-validator";

export class VerifyInviteEmailDto {
  @IsNotEmpty()
  token: string;
}
