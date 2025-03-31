import jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../config/config.js';


export const authenticate = (req, res, next) => {

    const token = req.cookies.token;

    if (!token) return res.status(403).send("Access denied please login");


    try {

        const decoded = jwt.verify(token, JWT_SECRET);

        req.user = decoded;

        next();

    } catch (error) {
        return res.status(403).send("Access denied please login");
    }

};