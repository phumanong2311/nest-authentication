import { create } from 'express-handlebars';
import Handlebars from 'handlebars';
import { resolve } from 'node:path';
import { InviteTemplateMailData, RegisterTemplateMailData, TemplateEmail } from './type';

const hbs = create({
  extname: 'hbs',
  layoutsDir: resolve(__dirname, 'layout'),
  partialsDir: [resolve(__dirname, 'partials')],
  defaultLayout: resolve(__dirname, 'layout/main.hbs'),
  handlebars: Handlebars,
});



interface TemplateDataTypeMap {
  [TemplateEmail.register]: RegisterTemplateMailData;
  [TemplateEmail.invite]: InviteTemplateMailData;
  [TemplateEmail.forgotPassword]: { url: string };
}

const templates: Record<keyof typeof TemplateEmail, string> = {
  [TemplateEmail.register]: resolve(__dirname, 'register.hbs'),
  [TemplateEmail.invite]: resolve(__dirname, 'invite.hbs'),
  [TemplateEmail.forgotPassword]: resolve(
    __dirname,
    'forgot-password.hbs',
  ),
};

export const renderTemplate = <K extends keyof TemplateDataTypeMap>(
  view: K,
  data: TemplateDataTypeMap[K],
) => {
  const template = templates[view];
  return hbs.renderView(template, data);
};
