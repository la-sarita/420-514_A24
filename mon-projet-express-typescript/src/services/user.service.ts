import { User } from '../interfaces/user.interface';
import { UserModel } from '../models/user.model';
import { key } from '../services/auth.service';

export class UserService {
  public static findByEmail(email: string) {
    return this.getAllUsers().then(users=> users.filter(user => user.email === email)[0]);
  }
  public static async getAllUsers(): Promise<User[]> {
    // Logique pour récupérer tous les utilisateurs
    const password = key.encrypt('password', 'base64');
    return [new UserModel(1, 'John Doe', 'john.doe@example.com', 'johndoe', password)];
  }
}