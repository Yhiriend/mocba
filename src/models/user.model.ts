export enum UserRolEnum {
  ADMIN = "ADMIN",
  OBSERVER = "OBSERVER",
}
export interface UserModel {
  id: string;
  name: string;
  surname: string;
  username: string;
  password: string;
  role?: UserRolEnum;
}
