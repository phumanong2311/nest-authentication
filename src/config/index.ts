import * as mailConfig from './mail.config';
import * as authConfig from './auth.config';
import * as appConfig from './app.config';

export const config = {
  ...mailConfig,
  ...authConfig,
  ...appConfig
};
