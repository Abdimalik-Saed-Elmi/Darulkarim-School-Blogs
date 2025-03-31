import express from 'express';
import { createPost, deletePost, getUserPosts, updatePost } from '../controller/postController.js';
import { authenticate } from '../middleware/authMiddleware.js';
import upload from '../middleware/upload.js';


const postRouter = express.Router();


postRouter.post('/create-post', authenticate, upload.single('image'), createPost);
postRouter.get('/get-user-posts', authenticate, getUserPosts);
postRouter.delete('/delete-post/:id', authenticate, deletePost);
postRouter.post('/update-post/:id', authenticate, upload.single('image'), updatePost);

export default postRouter;