import * as nodemailer_app from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { config } from '../../config';

export const nodemailer = nodemailer_app.createTransport({
  service: 'gmail',
  auth: {
    user: config.mailConfig.mailUser,
    pass: config.mailConfig.mailPass,
  },
});
export const sendMail = async (mailOptions: Omit<Mail.Options, 'from'>) => {
  await nodemailer.sendMail({
    from: config.mailConfig.mailUser,
    ...mailOptions,
  });
};
