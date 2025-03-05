import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsNotEmpty()
  @IsString()
  role: string;

  @IsOptional()
  @IsString()
  scope?: string;
}
