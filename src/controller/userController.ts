import { Request, Response } from 'express';
import userService from '../service/userService';

class UserController {
  getUsers(req: Request, res: Response): void {
    const users = userService.getUsers();
    res.json(users);
  }

  getUserById(req: Request, res: Response): void {
    const userId = parseInt(req.params.id, 10);
    const user = userService.getUserById(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  }
}

export default new UserController();
