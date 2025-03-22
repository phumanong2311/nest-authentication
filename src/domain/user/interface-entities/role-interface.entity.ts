export interface IRole {
  id: string;
  role: string;
  scope?: string;
  userIds: string[]; // Representing the many-to-many relationship
}
