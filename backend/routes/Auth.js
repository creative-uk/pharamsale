import express from 'express';
import { register, login, logout, CheckUser } from '../controllers/Auth.js';
import { IsUser } from '../middleware/verifyToken.js';

const AuthRoutes = express.Router();

AuthRoutes.post('/register', register); // Removed the upload middleware since we're not using it.
AuthRoutes.post('/login', login);
AuthRoutes.post('/logout', logout);
AuthRoutes.get('/CheckUser', IsUser, CheckUser);

export default AuthRoutes;
