import express from 'express'
import UserController from '../controllers/user.controller.js';

const router = express.Router()

router.post('/', UserController.createUser)
router.get('/:id', UserController.getUser)
router.get('/', UserController.getUsers)
router.delete('/:id', UserController.deleteUser)
router.put('/', UserController.updateUser)

export default router;