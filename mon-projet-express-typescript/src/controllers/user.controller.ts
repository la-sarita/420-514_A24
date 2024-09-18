import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
  public async getAllUsers(req: Request, res: Response): Promise<void> {
    const users = await UserService.getAllUsers();
    res.json(users);
  }

  public static async getAdminData(req: Request, res: Response) {
    res.json({ message: 'Données réservées aux administrateurs.' });
  }
}