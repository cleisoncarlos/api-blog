import express from 'express'
import CategoryController from '../controllers/category.controller.js';

const router = express.Router()

router.post('/', CategoryController.createCategory)
router.get('/:id', CategoryController.getCategory)
router.get('/', CategoryController.getCategorys)
router.delete('/:id', CategoryController.deleteCategory)
router.put('/', CategoryController.updateCategory)

export default router;