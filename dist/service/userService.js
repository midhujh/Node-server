"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = __importDefault(require("../repository/userRepository"));
class UserService {
    getUsers() {
        return userRepository_1.default.getAllUsers();
    }
    getUserById(id) {
        return userRepository_1.default.getUserById(id);
    }
}
exports.default = new UserService();
