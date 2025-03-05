import { IsNotEmpty } from "class-validator";

export class UpdatePasswordDto {
  id?: number;

  @IsNotEmpty()
  currentPassword: string;

  @IsNotEmpty()
  newPassword: string;
}
