// common js

import express from 'express';
import connectDB from './config/db.js';
import chalk from 'chalk';
import { registerUser } from './controller/userController.js';
import userRouter from './routes/user.js';
import cookieParser from 'cookie-parser';
import postRouter from './routes/post.js';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cookieParser());


// app.post('/api/register-user', registerUser);

app.use('/api/user', userRouter);
app.use('/api/post', postRouter);


connectDB();

app.listen(PORT, () => {
    console.log(`${chalk.green.bold('server')} listening on ${PORT}`);
});