import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRoleDto {
  @IsNumber()
  id: number;

  @IsOptional()
  @IsString()
  role?: string;

  @IsOptional()
  @IsString()
  scope?: string;
}
