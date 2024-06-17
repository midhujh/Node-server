import userRepository from '../repository/userRepository';
import { User } from '../dto/response';

class UserService {
  getUsers(): User[] {
    return userRepository.getAllUsers();
  }

  getUserById(id: number): User | undefined {
    return userRepository.getUserById(id);
  }
}

export default new UserService();
