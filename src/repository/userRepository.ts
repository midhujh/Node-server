import fs from 'fs';
import path from 'path';
import { User } from '../dto/response';

class UserRepository {
  private users: User[];

  constructor() {
    const filePath = path.join(__dirname, '../data/users.json');
    this.users = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}

export default new UserRepository();
