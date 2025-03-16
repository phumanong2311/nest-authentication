import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import * as requestIp from 'request-ip';
import { UserService } from 'src/domain/user/services/user.service';
import { CurrentUserParam } from 'src/share/decorators/current-user-param.decorator';
import { AuthGuard, RedisGuard } from 'src/share/guards';
import {
  LoginDto,
  RegisterDto,
  ResendRegisterEmailDto,
  UpdatePasswordDto,
  VerifyInviteEmailDto,
  VerifyRegisterEmailDto,
} from '../dto/request';
import { InviteUserDto } from '../dto/request/invite.dto';
import { AuthService } from '../service/auth.service';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(RedisGuard)
  @Post('login')
  async login(@Body() body: LoginDto, @Request() request: Request) {
    try {
      const { email, password } = body;
      const token = await this.authService.login(email, password);
      const clientIP = requestIp.getClientIp(request);
      const requestHeaders = await request.headers['user-agent'];
      const user = await this.userService.getByEmail(email);
      if (token || requestHeaders || clientIP) {
        try {
          //logic create user info
        } catch (error) {
          console.error('Failed to log user info', error);
        }
      }
      return token;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }

  @Post('register')
  async register(@Body() body: RegisterDto) {
    try {
      return await this.authService.register(body);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('resend-register-email')
  async resendEmail(@Body() body: ResendRegisterEmailDto) {
    try {
      const emailRegister = await this.authService.resendRegisterEmail(
        body.email,
      );
      return emailRegister;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('verify-register-email')
  async verifyRegisterEmail(@Body() body: VerifyRegisterEmailDto) {
    try {
      return await this.authService.verifyRegisterEmail(body.token);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthGuard)
  @Post('invite-user')
  async inviteUser(
    @Body() body: InviteUserDto,
    @CurrentUserParam() currentUser: User,
  ) {
    try {
      const fullName = currentUser.firstName + ' ' + currentUser.lastName;
      return await this.authService.inviteUser(fullName, body.email);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('verify-invite-email')
  async verifyInviteEmail(@Body() body: VerifyInviteEmailDto) {
    try {
      return await this.authService.verifyInviteEmail(body.token);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthGuard)
  @Patch('update-password')
  async updatePassword(
    @Body() body: UpdatePasswordDto,
    @CurrentUserParam() currentUser: User,
  ): Promise<Omit<User, 'password'>> {
    const id = currentUser.id;
    try {
      return await this.authService.updatePassword({ id, ...body });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
