import jwt from 'jsonwebtoken';
import UserModel from '../models/user.js';

const isAdmin = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized: No Token Found" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded.userId);
        console.log(user)
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if (user.role !== 'admin') {
            return res.status(403).json({ success: false, message: "Access denied: Admins only" });
        }

        req.user = user; // Optionally, attach the user to the request object
        next(); // Proceed to the next middleware or route handler

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }

    const IsUser=async(req,res,next)=>{
}
};

const IsUser=async(req,res,next)=>{
    try {
       const token=req.cookies.token
       if (!token) {
          return res.status(401).json({messsage:"'Unauthorized: No token provided'"})
       }
 
       const decoded= jwt.verify(token,process.env.JWT_SECRET)
       const user=await UserModel.findById(decoded.userId)
       if (!user) {
          return res.status(401).json({messsage:"'user not found'"})
       }
 
     
     req.user=user
       next()
    
  } catch (error) {
      console.log(error)
  }
 }
 
 
 export {isAdmin,IsUser}