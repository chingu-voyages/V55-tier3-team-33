import { Router } from 'express';
import { home } from '../controllers/homeController.js';
import { register, login } from '../controllers/authController.js';

const router = Router();
router.get('/', home);

router.post('/register', register);
router.post('/login', login);

export default router;
