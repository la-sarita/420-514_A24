import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { roleMiddleware } from '../middlewares/roles.middleware';
import { verifyToken } from '../middlewares/auth.middleware';

const router = Router();
const userController = new UserController();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retrieve a list of users
 *     description: Retrieve a list of users from the API. Can be used to populate a list of users in your system.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                  id:
 *                     type: integer
 *                     example: 1
 *                  name:
 *                     type: string
 *                     example: John Doe
 *                  mail:
 *                     type: string
 *                     example : john.doe@example.com
 */
router.get('/users', userController.getAllUsers);

router.get('/admin', verifyToken, roleMiddleware(['admin']), UserController.getAdminData);

export default router;