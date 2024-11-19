
import express from 'express'
const router = express.Router()
import authController from '../controllers/auth.controller.js';

router.post('/', authController.login);


export default router;
