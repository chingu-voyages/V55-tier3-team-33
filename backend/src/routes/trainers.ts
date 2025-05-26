import { Router } from 'express';
const router = Router();

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
router.get('/trainers', (req, res) => {
  res.json([{ id: '1', name: 'Ash Ketchum' }]); // demo data
});

export default router;
