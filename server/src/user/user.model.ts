import { prop, getModelForClass } from '@typegoose/typegoose';
export class User {
  @prop()
  username: string;
  @prop()
  password: string;
  @prop()
  realname: string;
}

export const UserModel = getModelForClass(User);
