import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
  public async getAllUsers(req: Request, res: Response): Promise<void> {
    const users = await UserService.getAllUsers();
    res.json(users);
  }
}