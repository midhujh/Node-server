"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
class UserController {
    getUsers(req, res) {
        const users = userService_1.default.getUsers();
        res.json(users);
    }
    getUserById(req, res) {
        const userId = parseInt(req.params.id, 10);
        const user = userService_1.default.getUserById(userId);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).send('User not found');
        }
    }
}
exports.default = new UserController();
