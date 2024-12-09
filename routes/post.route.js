import express from 'express'
import PostController from '../controllers/post.controller.js';
import uploadImage from '../middlewares/uploadImageMiddleware.js'

const router = express.Router()

router.post('/', uploadImage.single('urlImagePost'), PostController.createPost)
router.get('/:id', PostController.getPost)
router.get('/', PostController.getPosts)
router.delete('/:id', PostController.deletePost)
router.put('/', PostController.updatePost)

export default router;
