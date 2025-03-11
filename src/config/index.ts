import { dbConfig } from './db.config';
import { IConfig } from './interface';
import { jwtConfig } from './jwt.config';
import { mailConfig } from './mail.config';

export const config: IConfig = {
  id: process.env.APP_ID,
  port: parseInt(process.env.PORT, 10),
  domain: process.env.DOMAIN,
  jwt: jwtConfig,
  emailService: mailConfig,
  db: dbConfig,
};
