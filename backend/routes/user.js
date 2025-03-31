import express from 'express';
import { loginUser, registerUser } from '../controller/userController.js';

const userRouter = express.Router();


userRouter.post('/register-user', registerUser);
userRouter.post('/login-user', loginUser);


export default userRouter;