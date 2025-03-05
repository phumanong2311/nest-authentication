export enum TemplateEmail {
  'register' = 'register',
  'invite' = 'invite',
  'forgotPassword' = 'forgotPassword',
}
export type RegisterTemplateMailData = {
  name: string;
  url: string
};
export type InviteTemplateMailData = {
  userInviteName: string;
  url: string;
}
