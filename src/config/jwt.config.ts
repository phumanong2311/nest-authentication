import * as dotenv from 'dotenv';
import { readFileSync } from 'fs';
import { join } from 'path';
import { IJwt } from './interface';

dotenv.config();

const publicKey = readFileSync(
  join(__dirname, '..', '..', 'keys/public.key'),
  'utf-8',
);
const privateKey = readFileSync(
  join(__dirname, '..', '..', 'keys/private.key'),
  'utf-8',
);

export const jwtConfig: IJwt = {
  access: {
    privateKey,
    publicKey,
    time: parseInt(process.env.JWT_ACCESS_TIME, 10),
  },
  confirmation: {
    secret: process.env.JWT_CONFIRMATION_SECRET,
    time: parseInt(process.env.JWT_CONFIRMATION_TIME, 10),
  },
  resetPassword: {
    secret: process.env.JWT_RESET_PASSWORD_SECRET,
    time: parseInt(process.env.JWT_RESET_PASSWORD_TIME, 10),
  },
  refresh: {
    secret: process.env.JWT_REFRESH_SECRET,
    time: parseInt(process.env.JWT_REFRESH_TIME, 10),
  },
};
