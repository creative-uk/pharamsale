import express from 'express'
import { Getuser, Deleteuser } from '../controllers/Admin.js';
import { isAdmin } from '../middleware/verifyToken.js';


const AdminRoutes= express.Router();

AdminRoutes.get('/getuser',isAdmin, Getuser)
AdminRoutes.delete('/deleteuser/:id', isAdmin, Deleteuser);


export default AdminRoutes