import * as dotenv from 'dotenv';

dotenv.config();

export const appConfig = {
  port: process.env.PORT || 4000,
  app_url: process.env.APP_URL || 'http://localhost:5173',
};
