// common js

import express from 'express';
import connectDB from './config/db.js';
import chalk from 'chalk';
// import { registerUser } from './controller/userController.js';
import userRouter from './routes/user.js';
import cookieParser from 'cookie-parser';
import postRouter from './routes/post.js';
import path from 'path'

const app = express();
const PORT = 8000;

const __dirname = path.resolve()

app.use(express.json());
app.use(cookieParser());


// app.post('/api/register-user', registerUser);

app.use('/api/user', userRouter);
app.use('/api/post', postRouter);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'frontend/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend','dist', 'index.html'));
    });
}


app.listen(PORT, () => {
    connectDB();
    console.log(`${chalk.green.bold('server')} listening on ${PORT}`);
});