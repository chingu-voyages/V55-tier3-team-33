import { Router } from 'express';
import { trainers, trainerById } from '../controllers/trainersController.js';
import { register } from '../controllers/authController.js';

const router = Router();

// TODO: remove this after switching to codegen via swagger-jsdoc
/* eslint-disable jsdoc/check-tag-names */
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

/* eslint-disable jsdoc/check-tag-names */
/**
 * @swagger
 * /trainers/{id}:
 *   get:
 *     summary: Get a trainer by ID
 *     tags: [Trainers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The trainer ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A trainer object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *       404:
 *         description: Trainer not found
 */
router.get('/trainers/:id', trainerById);

export default router;
