import { User } from '../interfaces/user.interface';

export class UserModel implements User {
  constructor(public id: number, public name: string, public email: string) {}
}