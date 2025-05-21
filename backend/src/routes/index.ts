import { Router } from 'express';
import { home } from '../controllers/homeController.js';
import { register } from '../controllers/authController.js';

const router = Router();
router.get('/', home);

router.post('/register', register);

export default router;
