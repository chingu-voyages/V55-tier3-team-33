import { Router } from 'express';
import { home } from '../controllers/homeController.js';
import { register } from '../controllers/authController.js';
import { trainers } from '../controllers/trainersController.js';

const router = Router();

// TODO: remove this after switching to codegen via swagger-jsdoc
/* eslint-disable jsdoc/check-tag-names */
/**
 * @swagger
 * /home:
 *   get:
 *     summary: Get a welcome message
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: A simple message
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 */

router.get('/', home);

/**
 * @swagger
 * /trainers:
 *   get:
 *     summary: Get all trainers
 *     tags: [Trainers]
 *     responses:
 *       200:
 *         description: A list of trainers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 */
router.get('/trainers', trainers);
router.post('/register', register);

export default router;
