import * as dotenv from 'dotenv';

dotenv.config();

export const mailConfig = {
  mailUser: process.env.EMAIL_USER,
  mailPass: process.env.EMAIL_PASS,
  appUrl: process.env.APP_URL,
  verifyEmailUrl: process.env.APP_VERIFY_EMAIL,
  inviteEmailUrl: process.env.APP_INVITE_EMAIL
};
