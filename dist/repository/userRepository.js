"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class UserRepository {
    constructor() {
        const filePath = path_1.default.join(__dirname, '../data/users.json');
        this.users = JSON.parse(fs_1.default.readFileSync(filePath, 'utf-8'));
    }
    getAllUsers() {
        return this.users;
    }
    getUserById(id) {
        return this.users.find(user => user.id === id);
    }
}
exports.default = new UserRepository();
