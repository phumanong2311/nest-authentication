import Mail from 'nodemailer/lib/mailer';
import { config } from '../../config';
import { nodemailer } from './nodemailler';

export class MailService {

  static async send(mailOptions: Omit<Mail.Options, 'from'>) {
    await nodemailer.sendMail({
      from: config.mailConfig.mailUser,
      ...mailOptions,
    });
  }
}
