import * as dotenv from 'dotenv';

dotenv.config();

export const authConfig = {
  TOKEN_SECRET_KEY: process.env.TOKEN_SECRET_KEY,
  REGISTER_SECRET_KEY: process.env.REGISTER_SECRET_KEY,
  INVITE_SECRET_KEY: process.env.INVITE_SECRET_KEY,
};
