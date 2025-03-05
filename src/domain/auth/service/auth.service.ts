import { forwardRef, Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { config } from 'src/config';
import { sendMail } from 'src/infra/email/nodemailler';
import { renderTemplate } from 'src/infra/handlebars';
import { TemplateEmail } from 'src/infra/handlebars/type';
import { RedisService } from 'src/infra/redis/redis.service';
import { User } from 'src/modules/user-management/domain/entities';
import { UserService } from 'src/domain/user/services/user.service';
import { Email } from 'src/share/dto/value-object';
import { EmailRateLimiterService } from 'src/share/service/emailRateLimiterService';
import { RegisterDto, UpdatePasswordDto } from '../dto/request';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => RedisService))
    private readonly redisService: RedisService,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    private readonly emailRateLimiterService: EmailRateLimiterService,
  ) {}

  async login(email: Email, password: String) {
    const user = await this.userService.getByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }
    if (user.password !== password) {
      let storeRedis = await this.redisService.get(email.toString());
      if (storeRedis === null) {
        await this.redisService.set(email.toString(), '1', 'EX', 600);
      } else {
        let attempts = parseInt(storeRedis);
        if (isNaN(attempts)) {
          throw new Error('Invalid data in Redis');
        }
        if (attempts >= 5) {
          await this.redisService.set(email.toString(), 'locked', 'EX', 600);
          throw new Error('User is locked. Please try again in 600 seconds');
        } else {
          await this.redisService.set(
            email.toString(),
            (attempts + 1).toString(),
            'EX',
            600,
          );
        }
      }
      throw new Error('Password is incorrect');
    } else {
      const { password: ps, ...publicUser } = user;
      const token = jwt.sign(publicUser, 'warehouse', { expiresIn: '1h' });
      const refreshToken = jwt.sign(publicUser, 'warehouse', {
        expiresIn: '1d',
      });
      return {
        token: token,
        refreshToken: refreshToken,
      };
    }
  }

  tokenSendMail(email: Email, sk: string) {
    return jwt.sign({ email: email }, sk, {
      expiresIn: '1h',
    });
  }

  emailPathWithToken(path: string, token: string) {
    return `${path}?token=${token}`;
  }

  async register(registerData: RegisterDto) {
    try {
      const { email } = registerData;
      const user = await this.userService.getByEmail(email);
      if (user) {
        throw new Error('Email is already exist');
      }
      const data = {
        ...registerData,
        isActive: false,
      };
      const newUser = await this.userService.create(data);
      const canSendEmail = await this.emailRateLimiterService.canSendEmail(
        newUser.email.toString(),
      );
      if (!canSendEmail) {
        throw new Error(
          'You have reached the limit of 5 emails per day or you have to wait 1 minute between each email',
        );
      }
      const token = this.tokenSendMail(
        newUser.email,
        config.authConfig.REGISTER_SECRET_KEY,
      );
      const url = this.emailPathWithToken(
        config.mailConfig.verifyEmailUrl,
        token,
      );
      const fullName = newUser.firstName + '' + newUser.lastName;
      const htmlString = await renderTemplate(TemplateEmail.register, {
        name: fullName,
        url,
      });
      await sendMail({
        to: newUser.email.toString(),
        subject: 'Register Account',
        html: htmlString,
      });
      return {
        success: true,
        message: 'Email has been sent successfully',
      };
    } catch (error) {
      console.error('Failed to send email:', error);
      return {
        success: false,
        message: 'Failed to send email',
      };
    }
  }

  async resendRegisterEmail(email: Email) {
    try {
      const user = await this.userService.getByEmail(email);
      if (!user) {
        throw new Error('Account not found');
      }
      if (user.isActive || user.isEmailVerified) {
        throw new Error('Account has been registered');
      }
      const canSendEmail = await this.emailRateLimiterService.canSendEmail(
        user.email.toString(),
      );
      if (!canSendEmail) {
        throw new Error(
          'You have reached the limit of 5 emails per day or you have to wait 1 minute between each email',
        );
      }
      const token = this.tokenSendMail(
        email,
        config.authConfig.REGISTER_SECRET_KEY,
      );
      const url = this.emailPathWithToken(
        config.mailConfig.verifyEmailUrl,
        token,
      );
      const fullName = user.firstName + '' + user.lastName;
      const htmlString = await renderTemplate(TemplateEmail.register, {
        name: fullName,
        url,
      });
      await sendMail({
        to: email.toString(),
        subject: 'Resend Email Register Account',
        html: htmlString,
      });
      return {
        success: true,
        message: 'Email register has been sent successfully',
      };
    } catch (error) {
      throw new Error(error?.message || 'Failed to send email register');
    }
  }

  async verifyRegisterEmail(token: string) {
    try {
      const isVerify: User = jwt.verify(
        token,
        config.authConfig.REGISTER_SECRET_KEY,
      );
      if (!isVerify) {
        throw new Error('Token is invalid');
      }
      const user = await this.userService.getByEmail(isVerify.email);
      if (user.isActive || user.isEmailVerified) {
        throw new Error('Account has been registered');
      }
      user.isActive = true;
      user.isEmailVerified = true;
      return this.userService.update(user.id, user);
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new Error(
          'Email verification link has expired, please request a new one',
        );
      }
      throw new Error(error?.message || 'Failed to verify user');
    }
  }

  async inviteUser(userInvite: string, emailInvited: Email) {
    try {
      const token = this.tokenSendMail(
        emailInvited,
        config.authConfig.INVITE_SECRET_KEY,
      );
      const url = this.emailPathWithToken(
        config.mailConfig.inviteEmailUrl,
        token,
      );
      const htmlString = await renderTemplate(TemplateEmail.invite, {
        userInviteName: userInvite,
        url,
      });
      await sendMail({
        to: emailInvited.toString(),
        subject: 'Invite Email To Register Account',
        html: htmlString,
      });
      return {
        success: true,
        message: 'Email invite has been sent successfully',
      };
    } catch (error) {
      throw new Error(error?.message || 'Failed to send email invite');
    }
  }

  async verifyInviteEmail(token: string) {
    try {
      const isVerify: User = jwt.verify(
        token,
        config.authConfig.INVITE_SECRET_KEY,
      );
      if (!isVerify) {
        throw new Error('Token is invalid');
      }
      const user = await this.userService.getByEmail(isVerify.email);
      if (user) {
        throw new Error('Account has been registered');
      }
      return {
        success: true,
        message: 'Please create user',
      };
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new Error(
          'Email verification link has expired, please request a new one',
        );
      }
      throw new Error(error?.message || 'Failed to verify user');
    }
  }

  async updatePassword(
    data: UpdatePasswordDto,
  ): Promise<Omit<User, 'password'>> {
    try {
      const user = await this.userService.getById(data.id);
      if (!user) {
        throw new Error('User not found');
      }
      if (data.currentPassword === data.newPassword) {
        throw new Error('New password must be different from old password');
      }
      if (user.password !== data.currentPassword) {
        throw new Error('Old password is incorrect');
      }
      const { password, ...publicUser } = await this.userService.update(
        data.id,
        { password: data.newPassword },
      );
      return publicUser;
    } catch (error) {
      throw new Error(error?.message || 'Failed to update password');
    }
  }
}
