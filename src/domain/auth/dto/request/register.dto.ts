import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';
import { NAME_REGEX } from 'src/common';
import { Email } from 'src/share/dto/value-object';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: Email;

  @IsString()
  @IsNotEmpty()
  @Length(3, 100, {
    message: 'Name has to be between 3 and 50 characters.',
  })
  @Matches(NAME_REGEX, {
    message: 'Name can only contain letters, dtos, numbers and spaces.',
  })
  username: string;
}
