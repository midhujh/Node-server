import { Router } from 'express';
import userController from '../controller/userController';

const router = Router();

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);

export default router;
